import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getFriends, addFriend, updateFriend } from '../store/actions/actionCreators';
import Friend from '../components/Friend';
import NavBar from '../components/NavBar';

const StylesFriendsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 150px;
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

    addFriendHandler = () => {
        this.props.addFriend({ 
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        });

        this.setState({
            name: '',
            age: '',
            email: '',
        });
    }
    
    passFriendHandler = (id, name, age, email) => {
        this.setState({ 
            name,
            age,
            email,
            id, 
            submitText: 'Update friend'
        })
    }

    updateFriendHandler = () => {
        this.props.updateFriend(
            this.state.id, 
            {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
            }
        );

        this.setState({
            name: '',
            age: '',
            email: '',
            id: null,
            submitText: 'Add friend'
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
                    addFriendHandler={this.addFriendHandler}
                    updateFriendHandler={this.updateFriendHandler}
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
                                        passFriendHandler={this.passFriendHandler}
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

export default connect(mapStateToProps, { getFriends, addFriend, updateFriend })(FriendsContainer);