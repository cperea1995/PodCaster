import * as SessionUtil from '../util/session/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    };
};

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    };
};

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    };
};

export const signup = user => dispatch => {
    return SessionUtil.signUp(user).then( user => dispatch(receiveCurrentUser(user)), (err) => dispatch(receiveErrors(err.responseJSON)));
};

export const login = user => dispatch => {
    return SessionUtil.login(user).then( user => dispatch(receiveCurrentUser(user)), (err) => dispatch(receiveErrors(err.responseJSON)));
};

export const logout = () => dispatch => {
    return SessionUtil.logout().then( () => dispatch(logoutCurrentUser()), (err) => dispatch(receiveErrors(err.responseJSON)));
};