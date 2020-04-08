import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            confirm: '',
            password: '',
            username: '',
            dob: '',
            gender: '',
        }
    }

    render() {
        return (
            <h1>signup</h1>
        );
    }
};

export default SignupForm;