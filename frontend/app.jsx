import React from 'react';
import HeaderContainer from './components/header/header_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './components/session_form/login_form_container';
import SignupFormContainer from './components/session_form/signup_form_container';
import {AuthRoute} from './util/route_util';

const App = () => {
    return (
        <>
            <header>
                <Route exact path="/" component={HeaderContainer} />
            </header>

            <AuthRoute path="/login" component={LoginFormContainer}/>
            <AuthRoute path="/signup" component={SignupFormContainer}/>
        </>
    );
};

export default App;