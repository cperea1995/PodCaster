import React from 'react';
import HeaderContainer from '../../header/header_container'

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
        
        return (
            <>
                <HeaderContainer />
                <h1>Podcast Index Page</h1>

                <ul>
                    <li>{this.props.podcasts[0].id}</li>
                </ul>
            </>
        );
    }
};

export default PodcastIndex;