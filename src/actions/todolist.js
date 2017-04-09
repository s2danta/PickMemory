import data from './todolist.json'

export const LOAD_DATA = "LOAD_DATA"
export function loadDataSuccess() {
    return {
        type: LOAD_DATA,
        data
    }
}

export const CHANGE_DATA = "CHANGE_DATA"
export function changeDataSuccess() {
    return {
        type: CHANGE_DATA
    }
}