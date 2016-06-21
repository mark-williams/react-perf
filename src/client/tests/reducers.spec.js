import { INIT, REFRESH, CHOOSE } from '../lottery/lotteryActions';
import numbers from '../lottery/numbersReducer';
import chosen from '../lottery/chosenReducer';
import _ from 'underscore';


var chai = require('chai');
var expect = chai.expect;

describe('Lottery reducer tests', function () {

    describe('Numbers reducer', function() {

        describe('Should return default state if action is unsupported', function() {
            let state = numbers(undefined, { type: 'BOGUS' });
            expect(state).to.eql([]);
        });

        describe('INIT', function() {
            it('Should initialise the number pool with the requested size', function() {
                let state = numbers(undefined, { type: INIT, value: 5  });
                expect(state).to.eql([1,2,3,4,5]);
            })
        });
    });

    
    describe('Choose reducer', function() {

        describe('Should return default state if action is unsupported', function() {
            let state = chosen(undefined, { type: 'BOGUS' });
            expect(state).to.eql([]);
        });

        describe('CHOOSE', function() {
            it('Should set the chosen numbers', function() {
                let state = chosen(undefined, { type: CHOOSE, chosenValues: [1, 5, 9] });
                expect(state).to.eql([1, 5, 9]);
            });
        });
    });
});
