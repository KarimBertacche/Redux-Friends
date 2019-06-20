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
        case types.FETCH_FRIENDS_START:
            return { ...state, spinner: true };
        case types.FETCH_FRIENDS_SUCCESS:
            return { ...state, friends: action.payload, spinner: false };
        case types.FETCH_FRIENDS_FAILURE:
            return {...state, error: action.payload, spinner: false };
        case types.ADD_FRIEND:
            return { ...state };
        case types.UPDATE_FRIEND:
            const upDatedFriends = state.friends.map(friend => {
                if(friend.id === action.payload.id) {
                    return { 
                        ...friend,
                        name: action.payload.name,
                        age: action.payload.age,
                        email: action.payload.email,
                    }
                }
                return friend;
            })
            return {...state, friends: upDatedFriends }
        case types.DELETE_FRIEND:
            return {...state}
        default:
            return state;   
    } 
}

// export const fetchFriendsReducer = (state = initialState, action) => {
//     switch(action.type) {
       
//         default: 
//             return state;
//     }
// }