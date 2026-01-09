export type ToDoType = {
    id: Date,
    text: string,
    done: boolean,
}

export type ToDoStateType = ToDoType[];

export type ActionType = {
    type: "ADD_TODO" | "REMOVE_TODO" | "TOGGLE_TODO",
    payload: Date | string,
}