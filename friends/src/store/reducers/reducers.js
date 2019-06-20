import * as types from '../actions/actions';

const initialState = {
    friends: [],
    loggedIn: false,
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case types.LOGIN:
            return { ...state, loggedIn: true }
        default:
            return state;   
    } 
}