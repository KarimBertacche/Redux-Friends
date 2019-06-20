import React from 'react';
import styled from 'styled-components';

const StylesNavBar = styled.header`
    background-color: red;
    height: 70px;

    section {
        display: flex;
        justify-content: column;
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