import { FETCH_ALL_CATEGORY, INCREASE_QUANTITY, DECREASE_QUANTITY, FETCH_ALL_ITEMS, FETCH_ITEM_BY_ID, ADD_ITEM_TO_CART } from "../actions/actions"
const initialState = { itemsInCart: [] }

const cart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            console.log(action.payload)
            var newState = Object.assign({}, state, { itemsInCart: [...state.itemsInCart, { ...action.payload, quantity: 1 }] })
            return newState;
            break;
        case INCREASE_QUANTITY:
            console.log(action.payload);
            var newState = Object.assign({},state,{itemsInCart: [...state.itemsInCart,{...action.payload}]})
            console.log(newState)
            return newState;
            break;
        case DECREASE_QUANTITY:
            console.log(action.payload);
            var newState = Object.assign({}, state, { itemsInCart: [...state.itemsInCart, { ...action.payload }] })
            console.log(newState)
            return newState;
            break;
        default:
            return state;
            break;
    }
}
export default cart;