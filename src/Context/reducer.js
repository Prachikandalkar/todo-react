import {ADD_TODO, REMOVE_TODO} from "./action.types";


export default (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return[...state]
            break;
    
        default:
            break;
    }
}