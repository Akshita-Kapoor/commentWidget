import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./commentSlice";

const store = configureStore({
    reducer: {
        commentsData: commentSlice,
    },
})

export default store;
