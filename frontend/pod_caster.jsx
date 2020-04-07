import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionUtil from './util/session/session_api_util'
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();

    //TEST
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.signUp = SessionUtil.signUp;
    window.login = SessionUtil.login;
    window.logout = SessionUtil.logout;
    //TEST
    const root = document.getElementById('root');
    ReactDOM.render(<h1>TEST</h1>, root);
});