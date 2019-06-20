import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';
import { reducer } from './store/reducers/reducers';

// const rootReducer = combineReducers({
//     friends: fetchFriendsReducer.friends,
// })

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    document.getElementById('root')
);
