import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./data-slice.ts";

export const store = configureStore({
        reducer: {
            recipes: todoReducer
        }
    }
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;