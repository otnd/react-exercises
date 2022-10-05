import { createSlice } from '@reduxjs/toolkit'

export const TodoSlice = createSlice({
    name: 'todoList',
    initialState: [{ id: 1, title: 'sleep', completed: false }],
    reducers: {
        addTask: (state, action) => [...state, action.payload],
        removeTask: (state, action) => state.filter(item => item.id !== action.payload.id),
        editTask: (state, action) => state.map(item => item.id === action.payload.id ? { ...item, ...action.payload } : null)
    }
})