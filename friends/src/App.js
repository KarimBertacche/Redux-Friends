import React from 'react';
import { Route } from 'react-router-dom';

import PrivateRoute from '../container/PrivateRoute';
import Login from './components/Login';
import FriendsContainer from './container/FriendsContainer';

function App() {
  return (
    <>
      <div>
        <PrivateRoute path="/private" component={FriendsContainer} />
        <Route path="/login" component={Login} />
      </div>
    </>
  );
};

export default App;
