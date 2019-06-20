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

export default function Login() {
    return (
        <StylesLogin>
            <form onSubmit="">
                <input 
                    type="text" 
                />
                <input 
                    type="password" 
                />
                <button type="submit">Login</button>
            </form>
        </StylesLogin>
    )
};