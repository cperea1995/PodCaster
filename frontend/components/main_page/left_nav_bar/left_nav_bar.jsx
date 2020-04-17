import React from 'react';
import { Link } from 'react-router-dom'

class LeftNavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
               <div className="left-nav-container">
                   <img className="left-nav-logo" src={window.whiteLogo} alt="podcaster-logo"/>
                    <Link className="home-button" to="/"><i className="fas fa-home"></i>Home</Link>
                    <Link className="search-button" to="/"><i className="fas fa-search"></i>Search</Link>
                    <Link className="podcasts-button" to="/podcasts"><i className="fas fa-podcast"></i>Podcasts</Link>
               </div>
            </>
        );
    }
};

export default LeftNavBar;