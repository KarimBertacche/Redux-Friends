import React from 'react';
import styled from 'styled-components';

import AddFriend from './AddFriend';

const StylesNavBar = styled.header`
    background-color: red;
    height: 70px;
`;

export default function NavBar(props) {
    return (
        <StylesNavBar>
            <nav>
                <section>
                    <AddFriend />
                </section>
            </nav>
        </StylesNavBar>
    )
}