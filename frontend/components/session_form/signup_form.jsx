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

        if (this.state.day.length < 2) {
            this.state.day = `0${this.state.day}`
        }

        this.state.dob = `${this.state.year}-${this.state.month}-${this.state.day}`
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

                        
                        <h3 className="date-label">Date of birth</h3>
                        <div className="date-container">
                            <select value={this.state.month} 
                            className="select-dob"
                            onChange={this.update('month')}>
                                <option value="selected">Month</option>
                                <option value="01">January</option>
                                <option value="02">February</option>
                                <option value="03">March</option>
                                <option value="04">April</option>
                                <option value="05">May</option>
                                <option value="06">June</option>
                                <option value="07">July</option>
                                <option value="08">August</option>
                                <option value="09">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                
                            <input type="number"
                            className="day"
                            placeholder="Day"
                            min="01"
                            max="31"
                            value={this.state.day}
                            onChange={this.update('day')}
                            />
                           
                            <input type="number"
                            className="year"
                            placeholder="Year"
                            min="1900"
                            max="2020"
                            value={this.state.year}
                            onChange={this.update('year')}
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