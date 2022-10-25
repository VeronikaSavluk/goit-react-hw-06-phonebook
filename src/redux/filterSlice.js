import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = "";

const filterSlice = createSlice({
    name: "filter",
    initialState: filterInitialState,
    reducers: {
        setFilter: {
            reducer(state, action) {
                state = action.payload;
                return state;
            },
            // prepare(value) {
            //     return {
            //         payload: value,
            //     };
            // },
        },
    },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;