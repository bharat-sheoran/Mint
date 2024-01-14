import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    distribute: [],
}

export const distributeSlice = createSlice({
    name: "distribute",
    initialState,
    reducers: {
        addDistribute: (state, action) => {
            const newDistribute = {
                id: action.payload._id,
                Date: action.payload.date,
                Name: action.payload.name,
                Amount: action.payload.amount,
                Needs: action.payload.needs,
                Wants: action.payload.wants,
                Investment: action.payload.investment
            }
            state.distribute.push(newDistribute);
        },
        deleteDistribute: (state, action) => {
            state.distribute = state.distribute.filter((d) => d.id !== action.payload);
        },
        deleteAllDistribute: (state, action) => {
            return initialState;
        }
    }
})

export const { addDistribute, deleteDistribute, deleteAllDistribute } = distributeSlice.actions;
export default distributeSlice.reducer;