import { connect } from 'react-redux';
import PodcastShow from './podcast_show';
import { getPodcast } from '../../../actions/podcast_actions';


const msp = (state, ownProps) => {
   
    return {
        podcast: state.podcastParts.podcasts[ownProps.match.params.podcastId]
    };
};

const mdp = (dispatch) => {
    return {
        getPodcast: (podcastId) => dispatch(getPodcast(podcastId))
    };
};

export default connect(msp, mdp)(PodcastShow);
