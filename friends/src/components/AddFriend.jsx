import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addFriend, updateFriend  } from '../store/actions/actionCreators';

const StylesAddFriend = styled.div`
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
                ? () => props.addFriend({ 
                    name: props.name,
                    age: props.age,
                    email: props.email})
                : () => props.updateFriend( props.id, {
                    name: props.name,
                    age: props.age,
                    email: props.email})
            }>{props.submitText}</button>
        </StylesAddFriend>
    )
} 

export default connect(null, { addFriend, updateFriend  })(AddFriend);