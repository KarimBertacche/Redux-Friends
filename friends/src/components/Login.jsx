import React from 'react';
import styled from 'styled-components';

const StylesLogin = styled.div`
    form {
        display: flex;
        flex-direction: column;
        width: 300px;
        height: 200px;
        margin: 0 auto;
        border: 3px solid #000;
        padding: 30px;
    }
`;

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            credentials: {
                username: '',
                password: ''
            }
        }
    }

    loginInputHandler = (event) => {
        this.setState(prevState => ({
            ...prevState.credentials,
            [event.target.name]: event.target.value
        }))
    }

    login = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <StylesLogin>
                <form onSubmit="">
                    <input 
                        type="text" 
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.loginInputHandler}
                    />
                    <input 
                        type="password" 
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.loginInputHandler}
                    />
                    <button type="submit">Login</button>
                </form>
            </StylesLogin>
        )
    }
};