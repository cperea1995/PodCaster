import React from 'react';
import HeaderContainer from './components/header/header_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './components/session_form/login_form_container';
import SignupForm from './components/session_form/signup_form';

const App = () => {
    return (
        <>
            <header>
                <h1>PodCaster</h1>
                <HeaderContainer />
            </header>

            <Route path="/login" component={LoginFormContainer}/>
            <Route path="/signup" component={SignupForm}/>
        </>
    );
};

export default App;