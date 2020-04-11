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
                    <Link className="home-button" to="/">Home</Link>
                    <Link className="search-button" to="/search">Search</Link>
                    <Link className="podcasts-button" to="/podcasts">Podcasts</Link>
               </div>
            </>
        );
    }
};

export default LeftNavBar;