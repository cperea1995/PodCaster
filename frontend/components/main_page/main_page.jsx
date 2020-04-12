import React from 'react';
import HeaderContainer from '../header/header_container';
import LeftNavBar from './left_nav_bar/left_nav_bar';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <HeaderContainer />
                <LeftNavBar />
            </>
        );
    }
};

export default MainPage;