import React from 'react';
import HeaderContainer from './header_container';
import { Link } from 'react-router-dom';

const Header = (props) => {

    window.onclick = function (event) {
        if (!event.target.matches('.dropdown-btn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    const dropdown = () => {
        document.getElementById("username-dropdown").classList.toggle("show");
    }

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
                   <div className="dropdown">
                        <button onClick={dropdown} className="username dropdown-btn">{props.currentUser.username}</button>
                        <div id="username-dropdown" className="dropdown-content">
                            <button className="root-logout" onClick={props.logout}>Logout</button>
                        </div>
                   </div>
             </nav>
            </>
        );
    };

    return props.currentUser ? personalHeader() : sessionLinks();
};

export default Header;