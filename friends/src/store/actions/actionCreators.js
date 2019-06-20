import * as types from './actions';
import axios from 'axios';
import { axiosWithAuth } from '../../axiosWithAuth';

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

export const getData = () => dispatch => {
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