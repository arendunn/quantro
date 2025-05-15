import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const GoalContext = createContext();

export const GoalProvider = ({ children }) => {
    const [goals, setGoals] = useState([]);

    const addGoal = (goal) => {
        const newGoal = { ...goal, id: uuidv4(), currentAmount: 0 };
        setGoals((prevGoals) => [...prevGoals, newGoal]);
    };

    const addFunds = (goalId, amount) => {
        setGoals((prevGoals) =>
            prevGoals.map((goal) =>
                goal.id === goalId
                    ? { ...goal, currentAmount: goal.currentAmount + amount }
                    : goal
            )
        );
    };

    const editGoal = (goalId, updatedGoal) => {
        setGoals((prevGoals) =>
            prevGoals.map((goal) =>
                goal.id === goalId ? { ...goal, ...updatedGoal } : goal
            )
        );
    }

    const deleteGoal = (goalId) => {
        setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== goalId));
    };
    
    return (
        <GoalContext.Provider value={{ goals, addGoal, addFunds, editGoal, deleteGoal }}>
            {children}
        </GoalContext.Provider>
    );
}

export const useGoalContext = () => {
    return useContext(GoalContext);
}