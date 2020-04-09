import React from 'react';
import HeaderContainer from './header_container';
import { Link } from 'react-router-dom';

const Header = (props) => {

    const sessionLinks = () => {
        return (
            <>
                <nav className="root-page-header">
                    <Link className="root-login-link" to="/login">Login</Link>
                    &nbsp;
                    <Link className="root-signup-link" to="/signup">Sign Up</Link>
                </nav>
            </>
        );
    };

    const personalHeader = () => {
        return (
            <>
             <nav className="loggedin-root-page-header">
                    <button className="root-logout" onClick={props.logout}>Logout</button>
                    <div className="username">{props.currentUser.username}</div>
             </nav>
            </>
        );
    };

    return props.currentUser ? personalHeader() : sessionLinks();
};

export default Header;