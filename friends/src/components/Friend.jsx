import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { deleteFriend } from '../store/actions/actionCreators';

const StylesFriend = styled.div`
    position: relative;
    width: 300px;
    height: 160px;
    border: 3px solid #000;
    border-radius: 5px;
    text-align: center;
    margin: 10px;

    span {
        position: absolute;
        top: 2%;
        right: 2%;
        cursor: pointer;

        &:hover {
            color: red;
        }
    }

    button {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        padding: 5px 10px;
        border: 3px solid #000;
        border-bottom: none;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        font-weight: bold;
        cursor: pointer;

        &:hover {
            background: #000;
            color: #fff;
        }
    }

`;

function Friend(props) {
    return (
        <StylesFriend>
            <span onClick={() => props.deleteFriend(props.id)}>X</span>
            <h2>{props.name}</h2>
            <p>{props.age}</p>
            <p>{props.email}</p>
            <button onClick={() => props.passFriendHandler(
                props.id, 
                props.name, 
                props.age, 
                props.email
            )}>Update friend</button>
        </StylesFriend>
    );
}

export default connect(null, { deleteFriend })(Friend);