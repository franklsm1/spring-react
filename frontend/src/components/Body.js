import React, {Component} from 'react'
import Counter from './Counter'

export default class Body extends Component {
    render() {
        const {value, onIncrement, onDecrement} = this.props;
        return (
            <div>
                <Counter value={value} onIncrement={onIncrement} onDecrement={onDecrement}/>
            </div>
        );
    }
}
