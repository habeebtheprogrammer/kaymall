import { FETCH_ALL_CATEGORY, FETCH_ALL_ITEMS, FETCH_ITEM_BY_ID} from "../actions/actions"
export default function apiCalls (state={categories:[] ,items:[],review:[]},action){
    switch (action.type) {
        case FETCH_ALL_CATEGORY:
            var newState = Object.assign({},state,{categories: action.payload});
            console.log(newState)
            return newState
            break;
        case FETCH_ALL_ITEMS:
            var newState = Object.assign({},state,{items: action.payload});
            return newState
            break;
        case FETCH_ITEM_BY_ID:
            var newState = Object.assign({}, state);
            newState.review = action.payload
            return newState
            break;
        default: return state;
            break;
    }
}