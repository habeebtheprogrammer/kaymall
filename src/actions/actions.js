export const FETCH_ALL_CATEGORY = "FETCH_ALL_CATEGORY";
export const FETCH_ALL_ITEMS = "FETCH_ALL_ITEMS";
export const FETCH_ITEM_BY_ID = "FETCH_ITEM_BY_ID";
export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const NEWSLETTER_TOGGLE = "NEWSLETTER_TOGGLE";

export const fetchCat =(category) =>{
    return{type: FETCH_ALL_CATEGORY,  payload:category }}

export const fetchItems = (items) => {
    return { type: FETCH_ALL_ITEMS, payload: items }
}
export const fetchItem = (item) => {
    return { type: FETCH_ITEM_BY_ID, payload: item }
}
export const addToCart = (item) => {
    return { type: ADD_ITEM_TO_CART, payload: item }
}
export const increaseQ = (item) => {
    console.log("incresed")
    return { type: INCREASE_QUANTITY, payload: item }
}
export const decreaseQ = (item) => {
    return { type: DECREASE_QUANTITY, payload: item }
}
