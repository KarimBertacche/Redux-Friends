import React from 'react';
import styled from 'styled-components';

const StylesNavBar = styled.header`
    background-color: red;
    height: 70px;

    section {
        width: 300px;
        margin: 0 auto;
        border: 3px solid black;
        display: flex;
        flex-direction: column;

        input {
            border-bottom: 3px solid black;
            text-align: center;
            outline: none;
        }
    }
`;

export default function NavBar() {
    return (
        <StylesNavBar>
            <nav>
                <section>
                    <input type="text"/>
                    <input type="text"/>
                    <button>Add friend</button>
                </section>
            </nav>
        </StylesNavBar>
    )
}