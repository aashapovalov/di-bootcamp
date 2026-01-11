import {configureStore} from "@reduxjs/toolkit";
import bookReducer from "./book-slice.ts"

export const store = configureStore({
    reducer: {
        age: bookReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;