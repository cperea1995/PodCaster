import { connect } from 'react-redux';
import PodcastShow from './podcast_show';
import { getPodcast } from '../../../actions/podcast_actions';
import { receiveCurrentSong } from '../../../actions/audio_actions';


const msp = (state, ownProps) => {
   
    return {
        podcast: state.podcastParts.podcasts[ownProps.match.params.podcastId]
    };
};

const mdp = (dispatch) => {
    return {
        getPodcast: (podcastId) => dispatch(getPodcast(podcastId)),
        getCurrentSong: (songURL) => dispatch(receiveCurrentSong(songURL))
    };
};

export default connect(msp, mdp)(PodcastShow);
