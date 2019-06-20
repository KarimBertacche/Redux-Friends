import * as types from './actions';
import axios from 'axios';
import { axiosWithAuth } from '../../axiosWithAuth';
import { bindActionCreators } from '../../../../../../Library/Caches/typescript/3.5/node_modules/redux';

const loginAPI = 'http://localhost:5000/api/login';
const friendsData = 'http://localhost:5000/api/friends';

export const login = ({username, password}) => dispatch => {
    const credentials = {username, password };
    dispatch({ type: types.LOGIN_START })
    return axios
        .post(loginAPI, credentials)
        .then(response => {
            localStorage.setItem('token', response.data.payload);
            dispatch({ type: types.LOGIN_SUCCESS, payload: response.data.payload });
        })
        .catch(error => {
            console.log(error.message, 'Failed to login in, wrong Authorization') 
        });
}

export const getFriends = () => dispatch => {
    dispatch({ type: types.FETCH_FRIENDS_START });
    axiosWithAuth()
        .get(friendsData)
        .then(response => {
            dispatch({ type: types.FETCH_FRIENDS_SUCCESS, payload: response.data })
        })
        .catch(error => {
            dispatch({ type: types.FETCH_FRIENDS_FAILURE, payload: error.message })
        });
}

export const addFriend = ({ name, age, email }) => dispatch => {
    axiosWithAuth()
        .post(friendsData, { 
            name: name,
            age: age,
            email: email 
        })
        .then(response => {
            getFriends();
        })
        .catch(error => {

        });
}

export const updateFriends = (id) =>  dispatch => {
    axiosWithAuth()
        .put(friendsData + '/' + id, { 
            name: '',
            age: '',
            email: ''
        })
        .then(response => {

        })
        .catch(error => {

        });
}

export const deleteFriend = (id) => dispatch => {
    axiosWithAuth()
        .delete(friendsData + '/' + id)
        .then(response => {
            getFriends();
        })
        .catch(error => {

        });
}

