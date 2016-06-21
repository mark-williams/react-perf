import { CHOOSE } from './lotteryActions';

const chosen = (state = [], action) => {
    switch (action.type) {
        case CHOOSE:
            return action.chosenValues;
    }

    return state;
};

export default chosen;
