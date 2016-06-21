import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import numbers from './numbersReducer';
import chosen from './chosenReducer';

const initialState = {
    numbers: [],
    chosen: []
};

const lotteryReducer = (state=initialState, action) => {
    return {
        numbers: numbers(state.numbers, action),
        chosen: chosen(state.chosen, action)
    };
};

const lotteryStore = createStore(lotteryReducer);

export default lotteryStore;