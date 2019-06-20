import React from 'react';
import styled from 'styled-components';

import AddFriend from './AddFriend';

const StylesNavBar = styled.header`
    position: fixed;
    width: 100%;
    background-color: #000;
    height: 70px;
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
                        addFriendHandler={props.addFriendHandler}
                        updateFriendHandler={props.updateFriendHandler}
                    />
                </section>
            </nav>
        </StylesNavBar>
    )
}