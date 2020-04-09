import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            username: '',
            dob: '',
            gender: '',
            month: '',
            day: '',
            year: ''
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
                <div className="signup-header">
                    <img src={window.logo} className="signup-logo" />
                </div>
                
                <div className="signup-container">
                    <div className="signup-button-container">
                        <input className="signup-git-button" type="button" onClick={() => location.href = 'https://github.com/cperea1995/PodCaster/wiki'} value="Checkout My Github" />
                        <h3 className="signup-or"><span className="signup-or-span">or</span></h3>
                        <h3 className="signup-texthead">Sign up with your email address</h3>
                    </div>
                    <form className="signup-form" onSubmit={this.handleSubmit}>
                        <input type="text"
                        value={this.state.email}
                        placeholder="Email"
                        onChange={this.update('email')}
                        className="signup-email"
                        />

                        <input type="text"
                        placeholder="Confirm Email"
                        className="signup-email"
                        />

                        <input type="password"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.update('password')}
                        className="signup-password"
                        />

                        <input type="text"
                        value={this.state.username}
                        placeholder="What should we call you?"
                        onChange={this.update('username')}
                        className="signup-username"
                        />

                        <div className="dob-container">
                                <h3 className="date-label">Date of birth</h3>
                                <input type="date"
                                className="date"
                                value={this.state.dob}
                                onChange={this.update('dob')}
                            /> 
                        </div>
                            
                        <div className="gender-container">
                            <span className="male">
                                <input type="radio"
                                name="gender"
                                value="Male"
                                onChange={this.update('gender')}
                                className="male-button"
                                /> 
                                <span className="male-text">Male</span>
                            </span>

                            <span className="female">
                                <input type="radio"
                                name="gender"
                                value="Female"
                                onChange={this.update('gender')}
                                className="female-button"
                                /> 
                                <span className="female-text">Female</span>
                            </span>

                            <span className="nonbinary">
                                <input type="radio"
                                name="gender"
                                value="Nonbinary"
                                onChange={this.update('gender')}
                                className="nonbinary-button"
                                /> 
                                <span className="nonbinary-text">Non-binary</span>
                            </span>
                        </div>

                        <button className="signup-button">SIGN UP</button>
                    </form>

                    <h3 className="login-redirect">Already have an account? {this.props.navlink}</h3>
                </div>
            </>
        );
    }
};

export default SignupForm;