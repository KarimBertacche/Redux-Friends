import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getData } from '../store/actions/actionCreators';

function FriendsContainer() {    
    useEffect(() => {
        this.props.getData();
    });

    return (
        <div>
            Hello Friends!
        </div>
    );
}

export default connect(null, { getData })(FriendsContainer);