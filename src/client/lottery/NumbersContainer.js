import React from 'react';
import classNames from 'classNames';
import Number from './Number';
import _ from 'underscore';

const NumbersContainer = class extends React.Component {
    constructor(props) {
        super();
    }

    renderNumber(n, i) {
        let isSelected = _.contains(this.props.chosen, n);
        return <Number key={ i } number={ n } isSelected={ isSelected } />
    }

    render() {
        let ns = this.props.numbers;
        return (
            <div>
                { ns.map(this.renderNumber.bind(this)) }
            </div>          
        );
    }
}

export default NumbersContainer;

