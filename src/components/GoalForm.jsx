import { useState } from "react";
import { useGoalContext } from "../context/GoalContext";

function GoalForm({ onClose }) {
    const { addGoal } = useGoalContext();
    const [name, setName] = useState("");
    const [currentAmount, setCurrentAmount] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [targetAmount, setTargetAmount] = useState("");
    const [targetDate, setTargetDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newGoal = {
            name,
            currentAmount: parseFloat(currentAmount),
            interestRate: parseFloat(interestRate),
            targetAmount: parseFloat(targetAmount),
            targetDate,
        };

        addGoal(newGoal);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white/50">
            <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-xl font-bold mb-4">Add a New Goal</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Goal Title</label>
                        <input 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            className="border rounded w-full py-2 px-3"
                            placeholder="Holiday, Car, etc."
                            required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Current Amount</label>
                        <input
                            value={currentAmount}
                            onChange={(e) => setCurrentAmount(e.target.value)}
                            type="number"
                            className="border rounded w-full py-2 px-3"
                            placeholder="$0.00" 
                            required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Interest Rate</label>
                        <input 
                            value={interestRate}
                            onChange={(e) => setInterestRate(e.target.value)}
                            type="number"
                            className="border rounded w-full py-2 px-3"
                            placeholder="0.00% p.a."
                            required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Target Amount</label>
                        <input
                            value={targetAmount}
                            onChange={(e) => setTargetAmount(e.target.value)}
                            type="number"
                            className="border rounded w-full py-2 px-3" 
                            placeholder="$0.00"
                            required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Target Date</label>
                        <input
                            value={targetDate}
                            onChange={(e) => setTargetDate(e.target.value)}
                            type="date"
                            className="border rounded w-full py-2 px-3"
                            required />
                    </div>
                    <button type="submit"className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Submit</button>
                    <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
                </form>
            </div>
        </div>
    )
}
export default GoalForm;