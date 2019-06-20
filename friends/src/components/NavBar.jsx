import React from 'react';
import styled from 'styled-components';

import AddFriend from './AddFriend';

const StylesNavBar = styled.header`
    background-color: red;
    height: 100px;
`;

export default function NavBar(props) {
    return (
        <StylesNavBar>
            <nav>
                <section>
                    <AddFriend 
                        name={props.name}
                        age={props.age}
                        email={props.email}
                        id={props.id}
                        submitText={props.submitText}
                        changeInputHandler={props.changeInputHandler}
                    />
                </section>
            </nav>
        </StylesNavBar>
    )
}