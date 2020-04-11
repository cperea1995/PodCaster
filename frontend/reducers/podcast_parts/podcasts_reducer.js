import { RECEIVE_PODCASTS, RECEIVE_PODCAST } from '../../actions/podcast_actions';

const podcastsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PODCASTS:
            return Object.assign({}, state, action.podcasts)
        case RECEIVE_PODCAST:
            return Object.assign({}, state, action.podcast)
        default:
            return state;
    };
};

export default podcastsReducer;