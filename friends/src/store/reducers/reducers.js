import * as types from '../actions/actions';

const initialState = {
    friends: [],
    error: null,
    spinner: false,
    isAuth: false,
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case types.LOGIN_START:
            return { ...state, isAuth: true };
        case types.LOGIN_SUCCESS:
            return {...state, isAuth: false };
        default:
            return state;   
    } 
}