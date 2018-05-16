import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'
import {mapStateToProps, mapDispatchToProps} from './setup';
import App from './containers/App'
import reducer from './reducers'
import './index.css';

const options = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
};

fetch('/state', options).then(response => response.json())
    .then(initialState => {
        const store = createStore(reducer, {
            app: {
                value: initialState.value || 0,
                text: initialState.text || "Backend didn't give me anything",
                showLogo: true
            }
        });

        const ConnectedApp = connect(
            mapStateToProps,
            mapDispatchToProps
        )(App);

        render(
            <Provider store={store}>
                <ConnectedApp />
            </Provider>,
            document.getElementById('root')
        );
    });
