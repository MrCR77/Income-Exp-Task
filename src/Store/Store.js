import { configureStore } from "@reduxjs/toolkit";
import incExpReducer from '../Slices/IncExpSlice'

export const store = configureStore({

    reducer : {
        incExpState : incExpReducer

    }
})