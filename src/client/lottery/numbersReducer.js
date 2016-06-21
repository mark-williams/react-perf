import { INIT, REFRESH, CHOOSE } from './lotteryActions';

const getNumberPool = (count) => {
    let numbers = [];
    for (var i=1; i <= count; i++) {
        numbers.push(i);
    }

    return numbers;
};

const numbers = (state = [], action) => {
    switch (action.type) {
        case INIT:
            return getNumberPool(action.value);
    }

    return state;
};

export default numbers;
