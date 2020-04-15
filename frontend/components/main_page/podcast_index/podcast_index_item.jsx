import React from 'react';
import { Link } from 'react-router-dom';

const PodcastIndexItem = (props) => {
    return (
        <>
            <div className="podcast-container">
                <Link className="showpage-link" to={`/podcasts/${props.podcastId}`}>
                    <div className="tester">
                        <div className="square">
                            <i className="fas fa-fire "></i>
                        </div>
                        <div className="genre-text">{props.podcastName}</div>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default PodcastIndexItem;