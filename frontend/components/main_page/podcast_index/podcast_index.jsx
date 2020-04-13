import React from 'react';
import HeaderContainer from '../../header/header_container'
import PodcastIndexItem from './podcast_index_item';
import LeftNavBar from '../left_nav_bar/left_nav_bar'
import { Link } from 'react-router-dom'

class PodcastIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getPodcasts();
    }
    
    render() {
        if (this.props.podcasts.length === 0) {
            return (
                <>
                </>
            );
        };

        const podcasts = this.props.podcasts.map( podcast => {
            return <PodcastIndexItem podcastId={podcast.id} podcastName={podcast.podcast_name} key={podcast.id}/>
        })
        
        return (
            <>
                <div className="page">
                    <HeaderContainer />
            
                    <h1 className="podcast-header">Podcasts</h1>
    
                    <ul className="index-content-container" >
                        <li className="contained">{podcasts}</li>
                    </ul>
                </div>
                <LeftNavBar />
            </>
        );
    }
};

export default PodcastIndex;

// { this.props.podcasts[0].id }