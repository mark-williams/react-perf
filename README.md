#React Performance
Small project to investigate performance in React.

###Application
I wanted to explore a reasonably large set of arbitary data, so came up with this fairly pointless application! It picks lottery numbers on a timer, showing the pool from which it picks and displaying the chosen selection at the top and by highlighting the chsoen items in the pool.

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

