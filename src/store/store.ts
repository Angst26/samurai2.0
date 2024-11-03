import {configureStore} from "@reduxjs/toolkit";
import profileReducer from './slice/profileSlice.ts'

export const store = configureStore({
    reducer: {
        profilePage: profileReducer
    }
})


export type RootState = ReturnType<typeof store.getState>;