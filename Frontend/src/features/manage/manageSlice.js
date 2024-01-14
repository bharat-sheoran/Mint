import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    manages: [],
}

export const manageSlice = createSlice({
    name: "manage",
    initialState,
    reducers: {
        addManage: (state, action) => {
            const newManage = {
                id: action.payload._id,
                Date: action.payload.date,
                Category: action.payload.category,
                Name: action.payload.name,
                Used: action.payload.used,
                Availaible: action.payload.availaible,
                Invested: action.payload.invested
            }
            state.manages.push(newManage);
        },
        deleteManage: (state, action) => {
            state.manages = state.manages.filter((m) => m.id !== action.payload);
        },
        deleteAllManage: (state, action) => {
            return initialState;
        }
    }
})

export const { addManage, deleteManage, deleteAllManage } = manageSlice.actions;
export default manageSlice.reducer;