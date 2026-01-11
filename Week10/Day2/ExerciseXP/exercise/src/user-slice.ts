import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

type UserType = {
    id: number;
    firstName: string,
    lastName: string,
}

type AddUserPayloadType = {
    firstName: string,
    lastName: string,
}

const users: UserType[] = [];

export const userSlice = createSlice({
    name: "users",
    initialState: users,
    reducers: {
        addUser: (state, action: PayloadAction<AddUserPayloadType>) =>
            state.concat({
                id: Date.now(),
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
            }),
    }
})

export const {addUser} = userSlice.actions;
export default userSlice.reducer;