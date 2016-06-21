import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import numbers from './numbersReducer';
import chosen from './chosenReducer';

const initialState = {
    numbers: [],
    chosen: []
};

const reducer = combineReducers( {
    numbers, 
    chosen
});

const lotteryStore = createStore(reducer);

export default lotteryStore;