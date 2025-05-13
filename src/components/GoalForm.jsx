function GoalForm({ onClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white/50">
            <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-xl font-bold mb-4">Add a New Goal</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Goal Title</label>
                        <input type="text" className="border rounded w-full py-2 px-3" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Description</label>
                        <textarea className="border rounded w-full py-2 px-3"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Submit</button>
                    <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
                </form>
            </div>
        </div>
    )
}
export default GoalForm;