import { connect } from 'react-redux';
import Footer from './media_player_footer';
import { receiveCurrentSong } from '../../actions/audio_actions';

const msp = (state) => {
    return {
        audio: state.audioParts.audio
    };
};

const mdp = (dispatch) => {
    return {
        getCurrentSong: (songURL) => dispatch(receiveCurrentSong(songURL))
    };
};

export default connect(msp, mdp)(Footer);