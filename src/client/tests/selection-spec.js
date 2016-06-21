import selectFrom from '../lottery/selection';
import _ from 'underscore';

var chai = require('chai');
var expect = chai.expect;

describe('Selection tests', function () {

    let pool; 
    let chosen;

    beforeEach(() => {
        pool = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        chosen = selectFrom(pool, 3);
    });

    it('Given a pool of numbers should select the required amount randomly', function() {
        expect(chosen.length).to.equal(3);
    });

    it('Given a selection, all members should be unique', function() {
        let unique = _.uniq(chosen);
         expect(unique.length).to.equal(3);
    });

    it('Given a selection, members should be sorted (ascending)', function() {
        // sort mutates the original, so we ned to make a copy first
        let sorted = [...chosen].sort((a,b) => { return a > b; });
        expect(sorted).to.eql(chosen);
    });

    it('Given number required is greater than pool size just return the pool', function() {
        let chosen = selectFrom([1,2,3], 4);
        expect(chosen).to.eql([1,2,3]);
    });

});

