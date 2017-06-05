import React, { Component } from 'react';
import { getText } from './AppService';
import Header from '../header/Header';
import Home from './Home';

class App extends Component {

    state = {
        text: String
    };

    constructor() {
        super();
        this.state = {
            text: ''
        };
    }

    componentDidMount() {
        getText().then(response => {
            this.setState({
                text: response.text
            });
        });
    }

    render() {
        return (
            <div className="App">
                <Header text={this.state.text}/>
                <Home />
            </div>
        );
    }
}

export default App;
