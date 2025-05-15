import { useState } from "react";

function AddFundsModal({ goalId, message, onClose, onSubmit }) {
    const [amount, setAmount] = useState("");

    const handleSubmit = () => {
        onSubmit(goalId, amount);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white/90 p-10">
        <div className="bg-white rounded shadow-lg p-6 max-w-sm w-full">
            <p className="text-xl font-bold mb-4">Add Funds</p>
            <p className="mb-1 block text-gray-700">{message}</p>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(parseFloat(e.target.value))}
                className="border rounded w-full py-2 px-3 mb-4"
                placeholder="$0.00"
                required
            />
            <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            >
                Submit
            </button>
            <button
                onClick={onClose}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
            >
                Close
            </button>
        </div>
        </div>
    );
}

export default AddFundsModal;