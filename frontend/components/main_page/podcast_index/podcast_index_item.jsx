import React from 'react';
import { Link } from 'react-router-dom';

const PodcastIndexItem = (props) => {
    return (
        <>
            <div className="podcast-container">
                <Link className="showpage-link" to={`/podcasts/${props.podcastId}`}><h1 className="podcast">{props.podcastName}</h1></Link>
            </div>
        </>
    );
};

export default PodcastIndexItem;