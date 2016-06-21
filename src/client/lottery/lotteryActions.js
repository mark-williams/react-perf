export const REFRESH = 'REFRESH';
export const  CHOOSE = 'CHOOSE';
export const  INIT = 'INIT';

export const initPool = (number) => {
    return { type: INIT, value: number };
};

export const chooseNumbers = (count) => {
    return { type: CHOOSE, value: count };
};