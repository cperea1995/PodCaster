import { RECEIVE_CURRENT_SONG } from '../../actions/audio_actions';

const audioReducer = (state = {}, action ) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_SONG:
            // return Object.assign({}, state, action.songURL)
            return action.songURL
        default:
            return state;
    };
};

export default audioReducer;