import React from 'react';
import ReactDOM from 'react-dom';
// import * as SessionUtil from './util/session/session_api_util'
import configureStore from './store/store';
import Root from './root';
import {login, logout} from './actions/session_actions'


document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();

    //TEST
    window.login = login;
    window.logout = logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // window.signUp = SessionUtil.signUp;
    // window.login = SessionUtil.login;
    // window.logout = SessionUtil.logout;
    //TEST

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});