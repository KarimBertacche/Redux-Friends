import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getData } from '../store/actions/actionCreators';
import Friend from '../components/Friend';
import NavBar from '../components/NavBar';

const StylesFriendsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 100vh;
`;

function FriendsContainer(props) {    
    useEffect(() => {
        props.getData();
    });

    return (
        <div>
            <NavBar />
            <StylesFriendsContainer>
                {
                    props.friends.map(friend => {
                        return  <Friend 
                                    key={friend.id}
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

export default connect(mapStateToProps, { getData })(FriendsContainer);