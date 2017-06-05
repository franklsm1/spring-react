import React, { Component } from 'react';
import { getText } from './AppService';
import Header from '../header/HeaderSetup';
import Body from './Body';

class App extends Component {

    // state = {
    //     text: String
    // };
    //
    // constructor() {
    //     super();
    //     this.state = {
    //         text: ''
    //     };
    // }
    //
    // componentDidMount() {
    //     getText().then(response => {
    //         this.setState({
    //             text: response.text
    //         });
    //     });
    // }

    render() {
        return (
            <div className="App">
                <Header />
                <Body />
            </div>
        );
    }
}

export default App;
