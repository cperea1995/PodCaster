import React from 'react';
import HeaderContainer from '../../header/header_container';
import LeftNavBar from '../left_nav_bar/left_nav_bar';

class PodcastShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getPodcast(this.props.match.params.podcastId);
    }

    render() {

        return (
            <>
                <HeaderContainer /> 
                <LeftNavBar />
                <div className="showpage-content">
                    <div className="superflex">
                        <div className="podcast-art-episode-container">
                            <div className="podcast-art">Podcast Art</div>
                            <div className="podcast-info">
                                <h1 className="podcast-name">Podcast Name</h1>
                                <h3 className="caster-name">Caster Name</h3>
                                <button className="show-play-button">Play</button>
                                <span className="heartdot-container"><i className="far fa-heart"></i><i className="fas fa-ellipsis-h"></i></span>
                            </div>
                        </div>
    
                        <ul className="episodes-list">
                            <li className="episode"><i className="fas fa-music"></i>episodes</li>
                            <li className="episode"><i className="fas fa-music"></i>episodes</li>
                            <li className="episode"><i className="fas fa-music"></i>episodes</li>
                            <li className="episode"><i className="fas fa-music"></i>episodes</li>
                            <li className="episode"><i className="fas fa-music"></i>episodes</li>
                            <li className="episode"><i className="fas fa-music"></i>episodes</li>
                            <li className="episode"><i className="fas fa-music"></i>episodes</li>
                            <li className="episode"><i className="fas fa-music"></i>episodes</li>
                            <li className="episode"><i className="fas fa-music"></i>episodes</li>
                            <li className="episode"><i className="fas fa-music"></i>episodes</li>
                            <li className="episode"><i className="fas fa-music"></i>episodes</li>
                            <li className="episode"><i className="fas fa-music"></i>episodes</li>
                            <li className="episode"><i className="fas fa-music"></i>episodes</li>
                            <li className="episode"><i className="fas fa-music"></i>episodes</li>
                            <li className="episode"><i className="fas fa-music"></i>episodes</li>
                            <li className="episode"><i className="fas fa-music"></i>episodes</li>
                            <li className="episode"><i className="fas fa-music"></i>episodes</li>
                            <li className="episode"><i className="fas fa-music"></i>episodes</li>
                            <li className="episode"><i className="fas fa-music"></i>episodes</li>
                            <li className="episode"><i className="fas fa-music"></i>episodes</li>
                            <li className="episode"><i className="fas fa-music"></i>episodes</li>
                            <li className="episode"><i className="fas fa-music"></i>episodes</li>
                            <li className="episode"><i className="fas fa-music"></i>episodes</li>
                            <li className="episode"><i className="fas fa-music"></i>episodes</li>
                            <li className="episode"><i className="fas fa-music"></i>episodes</li>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
};

export default PodcastShow;