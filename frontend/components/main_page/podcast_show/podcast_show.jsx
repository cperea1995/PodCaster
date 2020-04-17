import React from 'react';
import HeaderContainer from '../../header/header_container';
import LeftNavBar from '../left_nav_bar/left_nav_bar';

class PodcastShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            podcast: ''
        }
    }

    componentDidMount() {
        
        this.props.getPodcast(this.props.match.params.podcastId).then(podcast => {
            
            this.setState({podcast: podcast.podcast})
        })
    }

    render() {
        

        if (this.state.podcast === '') {
            return (
                <>
                    <LeftNavBar />
                    <div className="loading"></div>
                </>
            );
        };

        const episodes = this.state.podcast.episode_names.map( episode => {
            return <li className="episode" key={episode.id}> <i className="fas fa-music"></i>{episode.episode_name}</li>
        })

        return (
            <>
                <LeftNavBar /> 
                <HeaderContainer /> 
                <div className="showpage-content">
                    
                    <div className="superflex">
                        <div className="podcast-art-episode-container">
                            <div><img className="podcast-art" src={this.state.podcast.photoUrl} alt=""/></div>
                            <div className="podcast-info">
                                <h1 className="podcast-name">{this.state.podcast.podcast_name}</h1>
                                <h3 className="caster-name">{this.state.podcast.caster_name.username}</h3>
                                <button className="show-play-button">Play</button>
                                <span className="heartdot-container"><i className="far fa-heart"></i><i className="fas fa-ellipsis-h"></i></span>
                            </div>
                        </div>
    
                        <ul className="episodes-list">
                            {episodes}
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