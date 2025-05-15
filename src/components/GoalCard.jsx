import { useState } from 'react';
import { useGoalContext } from "../context/GoalContext";
import AddFundsModal from "./AddFundsModal";
import ConfirmModal from "./ConfirmModal";
import dayjs from "dayjs";

function GoalCard({ goal }) {
    const { addFunds, deleteGoal } = useGoalContext();
    const [showConfirm, setShowConfirm] = useState(false);
    const [showAddFunds, setShowAddFunds] = useState(false);

    const {
        id,
        name,
        currentAmount,
        interestRate,
        targetAmount,
        targetDate,
    } = goal;

    const today = dayjs();
    const targetDateObj = dayjs(targetDate);
    const daysLeft = targetDateObj.diff(today, "day");
    const weeksLeft = targetDateObj.diff(today, "week");
    const monthsLeft = targetDateObj.diff(today, "month");
    
    const remainingAmount = targetAmount - currentAmount;
    const monthlyRate = (interestRate / 100) / 12;

    const progress = ((currentAmount / targetAmount) * 100).toFixed(2);

    const toSavePerWeekWithoutInterest = weeksLeft > 0 ? (remainingAmount / weeksLeft) : 0;

    
    let toSavePerWeekWithInterest = 0;
    if (monthsLeft > 0) {
        const futureValueCurrent = currentAmount * Math.pow(1 + monthlyRate, monthsLeft);
        const futureValueNeeded = targetAmount - futureValueCurrent;
        if (futureValueNeeded > 0) {
            const P = futureValueNeeded * monthlyRate / (Math.pow(1 + monthlyRate, monthsLeft) - 1);
            toSavePerWeekWithInterest = P / 4.345;
        }
    }

    const handleAddFunds = () => {
        setShowAddFunds(true)
    };

    const handleDeleteClick = () => {
        setShowConfirm(true);
    };

    const handleConfirmDelete = () => {
        deleteGoal(goal.id);
        setShowConfirm(false);
    };

    const handleCancelDelete = () => {
        setShowConfirm(false);
    };

    const formatMoney = (amount) => {
        return amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    if (progress >= 100) {
        return (
            <>
            <div className='bg-green-100 shadow rounded-lg p-5 space-y-4'>
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <button onClick={handleDeleteClick} className="text-red-500">✕</button>
                </div>
                <p className="text-green-500 text-lg font-bold">Goal Achieved!</p>
                {showConfirm && (
                    <ConfirmModal
                        message="Are you sure you want to delete this goal?"
                        onConfirm={handleConfirmDelete}
                        onCancel={handleCancelDelete}
                    />
                )}
            </div>
            </>
        );
    }

    if (today > targetDateObj) {
        return (
            <>
                <div className='bg-red-100 shadow rounded-lg p-5 space-y-4'>
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold">{name}</h2>
                        <button onClick={handleDeleteClick} className="text-red-500">✕</button>
                    </div>
                    <p className="text-red-500 text-lg font-bold">Goal Missed!</p>
                    {showConfirm && (
                        <ConfirmModal
                        message="Are you sure you want to delete this goal?"
                        onConfirm={handleConfirmDelete}
                        onCancel={handleCancelDelete}
                        />
                    )}
                </div>
            </>
        );
    }

    return (
        <>
            <div className="bg-white shadow rounded-lg p-5 space-y-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <button onClick={handleDeleteClick} className="text-red-500">✕</button>
                </div>

                <div className="w-full bg-gray-200 h-3 rounded-full">
                    <div
                        className="h-3 bg-green-500 rounded-full"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <p className="text-sm text-center">{progress}% Saved (${formatMoney(currentAmount)} / ${formatMoney(targetAmount)})</p>

                <div className="text-sm text-gray-800 space-y-1">
                    <p><strong>Target Date:</strong> {targetDateObj.format("MMMM D, YYYY")}</p>
                    <p><strong>Time Left:</strong> {weeksLeft} Weeks ({daysLeft} Days)</p>
                    <p><strong>To Save Per Week (With {interestRate}% Interest):</strong> ${formatMoney(toSavePerWeekWithInterest)}</p>
                    <p><strong>To Save Per Week (Without Interest):</strong> ${formatMoney(toSavePerWeekWithoutInterest)}</p>
                </div>

                <div className="flex justify-end gap-2">
                    <button
                        onClick={handleAddFunds}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
                    >
                        Add Funds
                    </button>
                </div>
            </div>
            {showAddFunds && (
                <AddFundsModal
                    goalId={goal.id}
                    message="Enter Amount:"
                    onClose={() => setShowAddFunds(false)}
                    onSubmit={(goalId, amount) => {
                        addFunds(goalId, amount);
                        setShowAddFunds(false);
                    }}
                />
            )}
            {showConfirm && (
                    <ConfirmModal
                        message="Are you sure you want to delete this goal?"
                        onConfirm={handleConfirmDelete}
                        onCancel={handleCancelDelete}
                    />
            )}
        </>

    )
}
export default GoalCard;