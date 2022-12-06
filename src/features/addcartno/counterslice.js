import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    name: "Addcart",
    initialState: {
        count: ""
    },
    reducers: {
        countes: (state, action) => {
            state.count = action.payload
        }
    }




})

export const { countes } = CounterSlice.actions;

export const value = (state) => state.counter.count;
// console.log(value);
export default CounterSlice.reducer;