import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    availaible: 0,
}

export const availaibleSlice = createSlice({
    name: "availaible",
    initialState,
    reducers: {
        addAvailaible: (state, action) => {
            const newAvailaible = action.payload;
            state.availaible = newAvailaible;
        }
    }
})

export const { addAvailaible} = availaibleSlice.actions;
export default availaibleSlice.reducer;