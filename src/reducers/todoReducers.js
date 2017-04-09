
import {
    LOAD_DATA,
    CHANGE_DATA
} from '../actions/todolist'


export default function todoReducers(state = {}, action = {}) {
    switch (action.type) {
        case LOAD_DATA:
            console.log("LOAD_DATA");
            return {
                ...state,
                status: true,
                data: action.data
            }
        case CHANGE_DATA:
            return {
                ...state,
                status: false
            }
        default:
            return state;
    }
}

