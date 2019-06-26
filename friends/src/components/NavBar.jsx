import React from 'react';
import styled from 'styled-components';

import AddFriend from './AddFriend';

const StylesNavBar = styled.header`
    position: fixed;
    width: 100%;
    background-color: #000;
    height: 70px;
    z-index: 100;

    h2 {
        display: inline-block;
        color: white;
        padding-left: 20px;
        font-size: 2rem;
    }

    section {
        width: 300px;
        margin: 0 auto;
        margin-top: -90px;
    }
`;

export default function NavBar(props) {
    return (
        <StylesNavBar>
            <nav>
                <h2>Friends</h2>
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