import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from './Slices/AuthSlice';
const store = configureStore({
    reducer: {

    },
    devTools: true
});

export default store;