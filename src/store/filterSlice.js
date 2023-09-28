import {createSlice} from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "valueFilter",
    initialState: {
        valueFilter: [],
        valuePerson: {},
    },
    reducers: {
        addFilter: (state,action) => {
            state.valueFilter = action.payload
        },
        addValue: (state,action) => {
            state.valuePerson = action.payload;
        }
    }
});
export const {addFilter,addValue} = filterSlice.actions;
export default filterSlice.reducer;
