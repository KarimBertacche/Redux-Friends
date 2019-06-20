import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { login } from '../store/actions/actionCreators';

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
            },
        }
    }

    loginInputHandler = (event) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        });
    }

    login = (event) => {
        event.preventDefault();
        this.props.login(this.state.credentials);
    }

    render() {
        return (
            <StylesLogin>
                <form onSubmit={this.login}>
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

// const mapDispatchToProps = dispatch => {
//     const login = dispatch(login());
// }

export default connect(null, { login })(Login);