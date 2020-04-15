import React from 'react';
import { Link } from 'react-router-dom';

const PodcastIndexItem = (props) => {
    return (
        <>
            <div className="podcast-container">
                <Link className="showpage-link" to={`/podcasts/${props.podcastId}`}>
                    <div className="tester">
                        
                        <img className="square" src={props.podcastArt} alt="" />
                        
                        <div className="genre-text">{props.podcastName}</div>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default PodcastIndexItem;