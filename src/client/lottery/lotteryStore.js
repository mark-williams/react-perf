import { createStore } from 'redux';
import numbersReducer from './numbersReducer';

const lotteryStore = createStore(numbersReducer);

export default lotteryStore;