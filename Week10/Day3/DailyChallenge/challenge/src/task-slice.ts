import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

import {type Category, tasksMock, type TaskType} from "./task-mocks.ts";

type TaskState = {
    selectedCategory: Category | null;
    tasks: TaskType[];
}

const initialState: TaskState = {
    selectedCategory: null,
    tasks: tasksMock
}

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        setCategory: (state, action: PayloadAction<Category>) => {
            state.selectedCategory = action.payload
        }
    }
})

export const {setCategory} = taskSlice.actions;
export default taskSlice.reducer;