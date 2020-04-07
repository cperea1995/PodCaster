import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup } from '../../actions/session_actions'

const msp = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'SignUp'
    };
};

const mdp = dispatch => {
    return {
        processForm: user => dispatch(signup(user))
    };
};

export default connect(msp, mdp)(SignupForm);