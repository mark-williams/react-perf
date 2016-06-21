import React from 'react';
import Chosen from './Chosen';
import NumbersContainer from './NumbersContainer';
import lotteryStore from './lotteryStore';
import { INIT, SELECT, initPool, chooseNumbers } from './lotteryActions';

const POOLSIZE = 59;
const SELECTIONSIZE = 6;
const REFRESHINTERVAL = 3000;


const Lottery = class extends React.Component {
    constructor() {
        super();

        lotteryStore.dispatch(initPool(POOLSIZE));        
        this.state = lotteryStore.getState();
        lotteryStore.subscribe(this.onStoreUpdated.bind(this));
        
        
        setInterval(this.refresh.bind(this), REFRESHINTERVAL);
    }

    refresh() {
        lotteryStore.dispatch(chooseNumbers(this.state.numbers, SELECTIONSIZE));
    }

    onStoreUpdated() {
        console.log('store updated');
        this.setState(lotteryStore.getState);
    }

    render() {
        return (
            <div>
                <h1>It's a lottery!</h1>
                <div className="row"><Chosen selection={this.state.chosen } /></div>
                <div className="row"><NumbersContainer numbers={ this.state.numbers } chosen={ this.state.chosen } /></div>
            </div>
        );
    }
}

export default Lottery;

