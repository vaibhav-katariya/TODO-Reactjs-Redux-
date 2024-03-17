import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../Feature/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})