import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionUtil from './util/session/session_api_util'

document.addEventListener('DOMContentLoaded', () => {

    //TEST
    window.signUp = SessionUtil.signUp;
    window.login = SessionUtil.login;
    window.logout = SessionUtil.logout;
    //TEST
    const root = document.getElementById('root');
    ReactDOM.render(<h1>TEST</h1>, root);
});