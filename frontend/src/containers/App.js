import React, { Component } from 'react';
import Header from '../components/Header';
import Body from '../components/Body';

export default class App extends Component {
    render() {
        const {showLogo, text, onToggleLogo, value, onIncrement, onDecrement} = this.props;
        return (
            <div className="App">
                <Header
                    showLogo={showLogo}
                    text={text}
                    onToggleLogo={onToggleLogo}
                />
                <Body
                    value={value}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                />
            </div>
        );
    }
}