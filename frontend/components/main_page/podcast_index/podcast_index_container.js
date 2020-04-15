import { connect } from 'react-redux';
import PodcastIndex from './podcast_index';
import { getPodcasts } from '../../../actions/podcast_actions';

const msp = state => {
    debugger
    return {
        podcasts: Object.values(state.podcastParts.podcasts)
    };
};

const mdp = dispatch => {
    return {
        getPodcasts: () => dispatch(getPodcasts())
    };
};

export default connect(msp, mdp)(PodcastIndex);