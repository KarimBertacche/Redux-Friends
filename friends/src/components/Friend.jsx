import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { deleteFriend } from '../store/actions/actionCreators';
const StylesFriend = styled.div`
    position: relative;
    width: 300px;
    height: 150px;
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

`;

function Friend(props) {
    return (
        <StylesFriend>
            <span onClick={() => props.deleteFriend(props.id)}>X</span>
            <h2>{props.name}</h2>
            <p>{props.age}</p>
            <p>{props.email}</p>
        </StylesFriend>
    );
}

export default connect(null, { deleteFriend })(Friend);