import {createSlice, type PayloadAction} from "@reduxjs/toolkit";


export const ageSlice = createSlice({
    name: "age",
    initialState: 0,
    reducers: {
        ageIncrement: (state, action: PayloadAction<number>) => state += action.payload,
        ageDecrement: (state, action: PayloadAction<number>) => state -= action.payload,
    }
})

export const {ageIncrement, ageDecrement} = ageSlice.actions;
export default ageSlice.reducer;