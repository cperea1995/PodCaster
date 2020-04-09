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
                <button onClick={props.logout}>Logout</button>
                <div>{props.currentUser.email}</div>
            </>
        );
    };

    return props.currentUser ? personalHeader() : sessionLinks();
};

export default Header;