import { INIT, REFRESH, CHOOSE } from './lotteryActions';
import selectFrom from './selection';

const getNumberPool = (count) => {
    let numbers = [];
    for (var i=1; i <= count; i++) {
        numbers.push(i);
    }

    return numbers;
};



const initialState = {
    numbers: [],
    chosen: []
};

const numbersReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT:
            return Object.assign({}, state, { numbers: getNumberPool(action.value) });

        case CHOOSE:
            let selected = selectFrom(state.numbers, action.value);
            return Object.assign({}, state, { chosen: selected});
    }

    return state;
};

export default numbersReducer;