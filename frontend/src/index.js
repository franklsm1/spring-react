import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './containers/App';
import reducer from './reducers'
import './index.css';

const options = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
};

fetch('/testInitialState', options).then(response => response.json())
    .then(initialState => {
        const store = createStore(reducer, {
            app: {
                value: initialState.value,
                text: initialState.text,
                showLogo: true
            }
        });

        render(
            <Provider store={store}>
                <App />
            </Provider>,
            document.getElementById('root')
        );
    });
