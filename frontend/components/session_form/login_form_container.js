import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions'
import { Link } from 'react-router-dom';
import React from 'react'

const msp = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'Login',
        navLink: <Link to="/signup">SIGN UP FOR PODCASTER</Link>
    };
};

const mdp = dispatch => {
    return {
        processForm: user => dispatch(login(user))
    };
};

export default connect(msp, mdp)(LoginForm);