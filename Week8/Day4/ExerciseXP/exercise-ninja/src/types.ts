export type ToDoType = {
    id: number,
    text: string,
    done: boolean,
}

export type ToDoStateType = ToDoType[];

export type ActionType =
    | { type: "ADD_TODO"; payload: string }
    | { type: "REMOVE_TODO"; payload: number }
    | { type: "TOGGLE_TODO"; payload: number };