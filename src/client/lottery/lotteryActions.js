import selectFrom from './selection';

export const REFRESH = 'REFRESH';
export const  CHOOSE = 'CHOOSE';
export const  INIT = 'INIT';

export const initPool = (number) => {
    return { type: INIT, value: number };
};

export const chooseNumbers = (numberPool, count) => {
    let chosen = selectFrom(numberPool, count);
    return { type: CHOOSE, chosenValues: chosen };
};