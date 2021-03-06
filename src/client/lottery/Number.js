import React from 'react';
import classNames from 'classNames';

const Number = class extends React.Component{
    constructor(props) {
        super();
        this.number = props.number;
        this.cssClass = classNames({
             number: true,
             selected: props.isSelected
        });
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        return (this.props.isSelected !== nextProps.isSelected || 
                this.props.number !== nextProps.number); 
    }

    componentWillUpdate() {
    }

    render() {
        let cssClass = classNames({
             number: true,
             selected: this.props.isSelected
        });
        return <span className={ cssClass }>{ this.props.number }</span>;
    }
     
};

export default Number;

