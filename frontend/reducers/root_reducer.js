import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import podcastPartsReducer from './podcast_parts/podcast_parts_reducer';
import audioPartsReducer from './audio_parts/audio_parts_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    podcastParts: podcastPartsReducer,
    audioParts: audioPartsReducer
});

export default rootReducer;