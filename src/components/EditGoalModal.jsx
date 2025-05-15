import { useState } from "react";

function EditGoalModal({ goal, onClose, onSubmit }) {
    const [name, setName] = useState(goal.name);
    const [currentAmount, setCurrentAmount] = useState(goal.currentAmount);
    const [interestRate, setInterestRate] = useState(goal.interestRate);
    const [targetAmount, setTargetAmount] = useState(goal.targetAmount);
    const [targetDate, setTargetDate] = useState(goal.targetDate);

    const handleSubmit = () => {
        onSubmit(goal.id, {
            name,
            currentAmount: parseFloat(currentAmount),
            interestRate: parseFloat(interestRate),
            targetAmount: parseFloat(targetAmount),
            targetDate
        });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white/50 p-10">
            <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-xl font-bold mb-4">Edit Goal</h2>
                <label className="block text-gray-700 mb-4">
                    Goal Title
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border rounded w-full py-2 px-3"
                        required />
                </label>
                <label className="block text-gray-700 mb-4">
                    Current Amount
                    <input
                        type="number"
                        value={currentAmount}
                        onChange={(e) => setCurrentAmount(e.target.value)}
                        className="border rounded w-full py-2 px-3"
                        required />
                </label>
                <label className="block text-gray-700 mb-4">
                    Interest Rate (%)
                    <input
                        type="number"
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value)}
                        className="border rounded w-full py-2 px-3" />
                </label>
                <label className="block text-gray-700 mb-4">
                    Target Amount
                    <input
                        type="number"
                        value={targetAmount}
                        onChange={(e) => setTargetAmount(e.target.value)}
                        className="border rounded w-full py-2 px-3"
                        required />
                </label>
                <label className="block text-gray-700 mb-4">
                    Target Date:
                    <input
                        type="date"
                        value={targetDate}
                        onChange={(e) => setTargetDate(e.target.value)}
                        className="border rounded w-full py-2 px-3"
                        required />
                </label>
                <button type="submit" onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Submit</button>
                <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
            </div>
        </div>
    );
}

export default EditGoalModal;