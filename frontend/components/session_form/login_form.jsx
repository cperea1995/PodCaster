import React from 'react'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault()
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        };
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    />
                    <input type="text"
                    value={this.state.password}
                    onChange={this.update('password')}
                    />
                    <button>Login</button>
                </form>

                <h2>Don't have an account?</h2>
                {this.props.navLink}
            </>
        );
    }
};

export default LoginForm;