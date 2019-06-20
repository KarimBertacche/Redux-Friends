import React from 'react';
import styled from 'styled-components';

const StylesFriend = styled.div`
    width: 300px;
    height: 150px;
    border: 3px solid #000;
    border-radius: 5px;
    text-align: center;
    margin: 10px;

`;

export default function Friend(props) {
    return (
        <StylesFriend>
            <h2>{props.name}</h2>
            <p>{props.age}</p>
            <p>{props.email}</p>
        </StylesFriend>
    );
}