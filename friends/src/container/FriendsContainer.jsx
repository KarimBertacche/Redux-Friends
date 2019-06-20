import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getFriends } from '../store/actions/actionCreators';
import Friend from '../components/Friend';
import NavBar from '../components/NavBar';

const StylesFriendsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

class FriendsContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            email: '',
            id: null,
            submitText: 'Add friend'
        }
    }

    componentDidMount() {
        this.props.getFriends();
    };

    changeInputHandler = event => {
        this.setState({ [event.target.name ]: event.target.value })
    };
    
    updateFriendHandler = (id, name, age, email) => {
        this.setState({ 
            name,
            age,
            email,
            id, 
            submitText: 'Update friend'
        })
    }

    componentDidUpdate() {
        this.props.getFriends();
    };
   
    render() {
        return (
            <div>
                <NavBar 
                    name={this.state.name}
                    age={this.state.age}
                    email={this.state.email}
                    id={this.state.id}
                    submitText={this.state.submitText}
                    changeInputHandler={this.changeInputHandler}
                />
                <StylesFriendsContainer>
                    {
                        this.props.friends.map(friend => {
                            return  <Friend 
                                        key={friend.id}
                                        id={friend.id}
                                        name={friend.name}
                                        age={friend.age}
                                        email={friend.email}
                                        updateFriendHandler={this.updateFriendHandler}
                                        />
                        })
                    }
                </StylesFriendsContainer>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends,
    }
}

export default connect(mapStateToProps, { getFriends })(FriendsContainer);