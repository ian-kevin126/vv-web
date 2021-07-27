import {configureStore} from '@reduxjs/toolkit';
import {SearchSlice} from "../pages/search/Search.slice";

export const rootReducer = {
    SearchState: SearchSlice.reducer
};

export const store = configureStore({
    reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
