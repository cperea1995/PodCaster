import { combineReducers } from 'redux';
import audioReducer from './audio_reducer';

const audioPartsReducer = combineReducers({
    audio: audioReducer,
});

export default audioPartsReducer;