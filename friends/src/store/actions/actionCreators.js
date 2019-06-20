import * as types from './actions';
import axios from 'axios';
import { axiosWithAuth } from '../../axiosWithAuth';

const LoginAPI = 'http://localhost:5000/api/login';

export const login = ({username, password}) => dispatch => {
    const credentials = {username, password };
    dispatch({ type: types.LOGIN_START })
    return axios
        .post(LoginAPI, credentials)
        .then(response => {
            localStorage.setItem('token', response.data.payload);
            dispatch({ type: types.LOGIN_SUCCESS, payload: response.data.payload });
        })
        .catch(error => {
            console.log(error.message, 'Failed to login in, wrong Authorization') 
        });
}

export const getData = () => {
    axiosWithAuth()
        .get()
        .then()
        .catch();
}