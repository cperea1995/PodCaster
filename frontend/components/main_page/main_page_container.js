import { connect } from 'react-redux';
import { getPodcasts } from '../../actions/podcast_actions';
import MainPage from './main_page';

const msp = state => {
   
    return {
        podcasts: Object.values(state.podcastParts.podcasts).slice(0,6)
    };
};

const mdp = dispatch => {
    return {
        getPodcasts: () => dispatch(getPodcasts())
    };
};

export default connect(msp, mdp)(MainPage);