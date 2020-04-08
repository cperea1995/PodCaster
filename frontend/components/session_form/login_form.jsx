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
                <div className="header">
                    <img src={window.logo} className="login-logo"/>
                </div>
            
                <div className="login-container">
                    <h2 className="button-header" >To continue, log in to PodCaster.</h2>
                    <div className="button-container">
                        <input className="git-button" type="button" onClick={() => location.href ='https://github.com/cperea1995/PodCaster/wiki'} value="Checkout My Github"/>
                        <input className="linkedin-button" type="button" onClick={() => location.href ='https://www.linkedin.com/feed/'} value="Checkout My linkedin"/>
                        <h3 className="or"><span className="or-span">OR</span></h3>
                    </div>
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <input className="email-input" type="text"
                        value={this.state.email}
                        placeholder="Email"
                        onChange={this.update('email')}
                        />
                        <input className="password-input" type="password"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.update('password')}
                        />
                        <button className="login-button">Log In</button>
                        <h3 className="forgot">Forgot your password?</h3>
                        <div className="line"></div>
                    </form>

                    <h2 className="no-account">Don't have an account?</h2>
                    {this.props.navLink}
                </div>
                
            </>
        );
    }
};

export default LoginForm;