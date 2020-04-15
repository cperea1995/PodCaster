import React from 'react';
import HeaderContainer from './components/header/header_container';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './components/session_form/login_form_container';
import SignupFormContainer from './components/session_form/signup_form_container';
import PodcastIndexContainer from './components/main_page/podcast_index/podcast_index_container';
import PodcastShowContainer from './components/main_page/podcast_show/podcast_show_container';
import MainPage from './components/main_page/main_page';
import {AuthRoute, ProtectedRoute} from './util/route_util';
import Footer from './components/media_player_footer/media_player_footer';

const App = () => {
    return (
        <>
            <header>
                {/* <Route exact path="/" component={HeaderContainer} /> */}
                <Route exact path="/" component={MainPage} />
            </header>
            
            <Switch>
                <AuthRoute path="/login" component={LoginFormContainer}/>
                <AuthRoute path="/signup" component={SignupFormContainer}/>
                <ProtectedRoute exact path="/podcasts" component={PodcastIndexContainer}/>
                <ProtectedRoute path="/podcasts/:podcastId" component={PodcastShowContainer} />
            </Switch>
            <ProtectedRoute path="/" component={Footer} />
        </>
    );
};

export default App;