import type { ToDoStateType, ActionType } from "./types.ts";

export function todoReducer(state: ToDoStateType, action: ActionType) {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, {
                id: Date.now(),
                text: action.payload,
                done: false
            }];
        case "REMOVE_TODO":
            return state.filter(todo => todo.id !== action.payload);
        case "TOGGLE_TODO":
            return state.map(todo => todo.id === action.payload ? {todo, done: !todo.done} : todo);
        default:
            return state;
    }
}