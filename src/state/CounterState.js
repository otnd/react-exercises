import { createSlice } from '@reduxjs/toolkit'

const defaultValue = 0

export const CounterState = createSlice({
    name: 'counter',
    initialState: defaultValue,
    reducers: {
        increment: (state, action) => state + action.payload,
        decrement: (state, action) => state - action.payload,
        reset: () => defaultValue
    }
})