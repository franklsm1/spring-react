import React, {Component} from 'react'
import Counter from './Counter'

export default class Body extends Component {
    get headerStyle() {
        return {
            textAlign: 'center'
        };
    }

    render() {
        const {value, onIncrement, onDecrement} = this.props;
        return (
            <div style={this.headerStyle}>
                <Counter value={value} onIncrement={onIncrement} onDecrement={onDecrement}/>
            </div>
        );
    }
}
