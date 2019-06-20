import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StylesAddFriend = styled.div`
    width: 300px;
    margin: 0 auto;
    border: 3px solid black;
    display: flex;
    flex-direction: column;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    overflow: hidden;
    z-index: 100;

    input {
        height: 25px;
        border-bottom: 3px solid black;
        text-align: center;
        outline: none;
        font-size: 1rem;
    }

    button {
        background: #000;
        padding: 5px;
        font-size: 1.2rem;
        font-weight: bold;
        color: #fff;
    }
`;

function AddFriend(props) {
    return (
        <StylesAddFriend>
            <input 
                type="text" 
                name="name"
                value={props.name}
                onChange={props.changeInputHandler}/>
            <input 
                type="number" 
                name="age"
                value={props.age}
                onChange={props.changeInputHandler}/>
            <input 
                type="email" 
                name="email"
                value={props.email}
                onChange={props.changeInputHandler}/>
            <button onClick={
                props.submitText === 'Add friend' 
                ? props.addFriendHandler 
                : props.updateFriendHandler
            }>{props.submitText}</button>
        </StylesAddFriend>
    )
} 

export default connect()(AddFriend);