
import _ from 'underscore';

const selectFrom = (pool, numberToSelect) => {
    let result = [];

    if (numberToSelect >= pool.length) {
        return pool;
    }
    
    while(result.length < numberToSelect) {
        let rnd = Math.floor((Math.random() * pool.length));
        let chosen = pool[rnd]; 
        if (_.contains(result, chosen) === false) {
            result.push(chosen);
        }
    }
    
    result.sort((x, y) => { return y < x; });
    return result;
};

export default selectFrom;