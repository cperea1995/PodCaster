import React from 'react';

const PodcastIndexItem = (props) => {
    return (
        <>
            <div className="podcast-container">
                <h1 className="podcast">{props.podcastName}</h1>
            </div>
        </>
    );
};

export default PodcastIndexItem;