import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './app.js';
import {Provider} from "react-redux";
import {allReducer} from "./reducers/index"
import {createStore} from "redux";

var store =  createStore(allReducer);
ReactDOM.render(<BrowserRouter>
                    <Provider store={store}>
                        <App />
                    </Provider >
                </BrowserRouter>, document.getElementById('main'));