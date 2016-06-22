import selectFrom from './selection';

export const REFRESH = 'REFRESH';
export const  CHOOSE = 'CHOOSE';
export const  INIT = 'INIT';

export const initPool = (number) => {
    return { type: INIT, value: number };
};

export const chooseNumbers = (numberPool, count) => {
    let chosen = selectFrom(numberPool, count)
    //let chosen = [1, 3, 5, 8];
    return { type: CHOOSE, chosenValues: chosen };
};