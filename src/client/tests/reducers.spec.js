import { INIT, REFRESH, CHOOSE } from '../lottery/lotteryActions';
import numbersReducer from '../lottery/numbersReducer';
import _ from 'underscore';


var chai = require('chai');
var expect = chai.expect;

describe('Lottery reducer tests', function () {

    beforeEach(function() {
        
    });

    describe('Should return default state if action is unsupported', function() {
        let state = numbersReducer(undefined, { type: 'BOGUS' });
        expect(state.numbers).to.eql([]);
    });

    describe('INIT', function() {
        it('Should initialise the number pool with the requested size', function() {
            let state = numbersReducer(undefined, { type: INIT, value: 5  });
            expect(state.numbers).to.eql([1,2,3,4,5]);
        })
    });

    describe('CHOOSE', function() {
        it('Should set the chosen numbers', function() {
            let state = numbersReducer(undefined, { type: INIT, value: 10 });
            state = numbersReducer(state, { type: CHOOSE, value: 3 });
            expect(state.chosen.length).to.equal(3);
        });
    });
});
