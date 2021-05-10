import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, { payload }) => {
            state.value += payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } = slice.actions;
export default slice.reducer;
