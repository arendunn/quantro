import { useState } from "react";
import { useGoalContext } from "../context/GoalContext";
import GoalCard from "./GoalCard";
import GoalForm from "./GoalForm";

function GoalDashboard() {
    const { goals } = useGoalContext();
    const [ showForm, setShowForm ] = useState(false);

    if (goals.length === 0) {
        return (
            <div className="flex flex-col items-center justify-top min-h-screen min-h-screen bg-gray-100 p-10"> 
                <p className="text-3xl font-bold">Welcome to Quantro!</p>
                <p className="text-lg mb-8 pt-10">No goals found.</p>       
                <button
                    onClick={() => setShowForm(true)}
                    className="flex justify-center items-center font-bold h-10 w-40 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
                >
                + Add New Goal
                </button>
                {showForm && (
                    <GoalForm onClose={() => setShowForm(false)} />
                )}
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-10">
            <p className="text-3xl font-bold">Financial Goals</p>
            <div className="grid gap-6 w-full max-w-4xl p-5">
                {goals.map((goal) => (
                    <GoalCard key={goal.id} goal={goal} />
                ))}
            </div>
            <button
                    onClick={() => setShowForm(true)}
                    className="flex justify-center items-center font-bold h-10 w-40 bg-blue-500 hover:bg-blue-600 text-white mt-7 px-4 py-1 rounded"
            >
            + Add New Goal
            </button>
            {showForm && (
                <GoalForm onClose={() => setShowForm(false)} />
            )}
        </div>
    );
}
export default GoalDashboard;