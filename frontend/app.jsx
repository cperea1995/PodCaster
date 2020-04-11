import React from 'react';
import HeaderContainer from './components/header/header_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './components/session_form/login_form_container';
import SignupFormContainer from './components/session_form/signup_form_container';
import PodcastIndexContainer from './components/main_page/podcast_index/podcast_index_container';
import MainPage from './components/main_page/main_page';
import {AuthRoute, ProtectedRoute} from './util/route_util';

const App = () => {
    return (
        <>
            <header>
                {/* <Route exact path="/" component={HeaderContainer} /> */}
                <Route exact path="/" component={MainPage} />
            </header>

            <AuthRoute path="/login" component={LoginFormContainer}/>
            <AuthRoute path="/signup" component={SignupFormContainer}/>
            <ProtectedRoute path="/podcasts" component={PodcastIndexContainer}/>
        </>
    );
};

export default App;