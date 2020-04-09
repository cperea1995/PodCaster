import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup } from '../../actions/session_actions'
import { Link } from 'react-router-dom';
import React from 'react'

const msp = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'SignUp',
        navlink: <Link className="redirect" to="/login">Log in</Link>
    };
};

const mdp = dispatch => {
    return {
        processForm: user => dispatch(signup(user))
    };
};

export default connect(msp, mdp)(SignupForm);