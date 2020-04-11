import { combineReducers } from 'redux';
import podcastsReducer from './podcasts_reducer'

const podcastPartsReducer = combineReducers({
    podcasts: podcastsReducer,
});

export default podcastPartsReducer;