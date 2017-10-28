import {combineReducers} from "redux";
import apiCalls from './reducer';
import ui from './ui';
import cart from './cart';

export const allReducer = combineReducers({
        apiCalls: apiCalls,
        ui : ui,
        cart: cart
    })