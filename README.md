#React Performance
Small project to investigate performance in React.

###Application
I wanted to explore a reasonably large set of arbitary data, so came up with this fairly pointless application! It picks lottery numbers on a timer, showing the pool from which it picks and displaying the chosen selection at the top and by highlighting the chosen items in the pool.

So I could quickly change the amount of items in the pool I have created a Redux action which initialises the pool (if this was reasonably static I could have set this as an initial state in the Redux store). 

###Split reducers
The store now is now composed of reducers:

~~~
const lotteryReducer = (state=initialState, action) => {
    return {
        numbers: numbers(state.numbers, action),
        chosen: chosen(state.chosen, action)
    };
};

const lotteryStore = createStore(lotteryReducer);
~~~

This can be further simplified by using Redux' combine reducers:

~~~
const reducer = combineReducers( {
    numbers, 
    chosen
});

const lotteryStore = createStore(reducer);
~~~

###Performance improvement
As the full state tree is updated after the CHOOSE (or indeed, any) action, this casuses a re-render for all of the numbers is the pool. This doesn't have any noticeable performance hit with a pool of 59 (the UK lottery pool), however if this is made infeasibly large (say, 15,000) the refresh of the chosen numbers is adversely affected.

This has been addressed by ensuring the numbers in the pool are only rendered if they have changed:

~~~
shouldComponentUpdate(nextProps, nextState) {
        return (this.props.isSelected !== nextProps.isSelected || 
                this.props.number !== nextProps.number); 
    }
~~~

(Of course this is an arbitary example; as the numbers in the pool don't change, in practice it may be better to remove them from the Redux state altogether.) 
