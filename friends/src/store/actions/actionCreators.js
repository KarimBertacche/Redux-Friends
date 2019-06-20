import * as types from './actions';
import axios from 'axios';

const LoginAPI = 'http://localhost:5000/api/login';

export const login = ({username, password}) => dispatch => {
    const credentials = {username, password };
    dispatch({ type: types.LOGIN_START })
    axios
        .post(LoginAPI, credentials)
        .then(response => {
            localStorage.setItem('token', response.data.payload);
            dispatch({ type: types.LOGIN_SUCCESS, payload: response.data.payload });
        })
        .catch(error => {
            console.log(error.message, 'Failed to login in, wrong Authorization') 
        });
}