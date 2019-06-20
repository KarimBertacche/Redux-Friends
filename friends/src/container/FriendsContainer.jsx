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

function FriendsContainer(props) {    
    useEffect(() => {
        props.getFriends();
    });

    return (
        <div>
            <NavBar />
            <StylesFriendsContainer>
                {
                    props.friends.map(friend => {
                        return  <Friend 
                                    key={friend.id}
                                    id={friend.id}
                                    name={friend.name}
                                    age={friend.age}
                                    email={friend.email}/>
                    })
                }
            </StylesFriendsContainer>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        friends: state.friends,
    }
}

export default connect(mapStateToProps, { getFriends })(FriendsContainer);