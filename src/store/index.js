import {configureStore} from "@reduxjs/toolkit";
import valueReduser from "./filterSlice";

export default configureStore({
    reducer: {
        valueFilter: valueReduser,
    },
});