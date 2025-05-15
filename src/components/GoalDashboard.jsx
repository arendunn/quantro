import { useGoalContext } from "../context/GoalContext";
import GoalCard from "./GoalCard";

function GoalDashboard() {
    const { goals } = useGoalContext();

    return (
        <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-10">
            <h1 className="text-3xl font-bold mb-6">Goal Dashboard</h1>
            <div className="grid gap-6 w-full max-w-4xl p-4">
                {goals.map((goal) => (
                    <GoalCard key={goal.id} goal={goal} />
                ))}
            </div>
        </div>
    );
}
export default GoalDashboard;