import { configureStore } from "@reduxjs/toolkit";
import  theme  from '../reducers/themeSlice';
import  api  from '../reducers/apiPageSlice';


const store = configureStore({
    reducer: {theme, api},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;