import React from "react";
import ReactDOM from "react-dom";
import thunk from 'redux-logger'
import logger from 'redux-thunk'
import reducer from './reducers/index'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'

import "./index.css";
import App from "./App";

const { worker } = require('./mocks/browser');
worker.start();

const rootElement = document.getElementById("root");

const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , 
    rootElement
);

//Task List:
//1. Add in all necessary components and libaryy methods.
//2. Create a store that includes thunk and logger middleware support.
//3. Wrap the App component in a react-redux Provider element.