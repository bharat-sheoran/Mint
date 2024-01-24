import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    availaible: 0,
    id: ""
}

export const availaibleSlice = createSlice({
    name: "availaible",
    initialState,
    reducers: {
        addAvailaible: (state, action) => {
            const newAvailaible = action.payload.amount;
            const newId = action.payload._id;
            state.availaible = newAvailaible;
            state.id = newId;
        }
    }
})

export const { addAvailaible} = availaibleSlice.actions;
export default availaibleSlice.reducer;