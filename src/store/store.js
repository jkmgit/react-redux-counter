
//import {configureStore} from 'redux';

import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {counter: 0};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        custom_increment(state, action) {
            state.counter = state.counter + action.payload;
        }
    }
    }
)



const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;
export default store;

