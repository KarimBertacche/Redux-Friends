import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addFriend } from '../store/actions/actionCreators';

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

class AddFriend extends React.Component {
    constructor(props) {
        super();
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }

    changeInputHandler = event => {
        this.setState({ [event.target.name ]: event.target.value })
    }

    render() {
        return (
            <StylesAddFriend>
                <input 
                    type="text" 
                    name="name"
                    value={this.state.name}
                    onChange={this.changeInputHandler}/>
                <input 
                    type="number" 
                    name="age"
                    value={this.state.age}
                    onChange={this.changeInputHandler}/>
                <input 
                    type="email" 
                    name="email"
                    value={this.state.email}
                    onChange={this.changeInputHandler}/>
                <button onClick={() => this.props.addFriend({ 
                    name: this.state.name,
                    age: this.state.age,
                    email: this.state.email
                })}>Add friend</button>
            </StylesAddFriend>
        )
    }
} 

export default connect(null, { addFriend })(AddFriend);