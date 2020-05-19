export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';

const receiveCurrentSong = (songURL) => {
    return {
        type: RECEIVE_CURRENT_SONG,
        songURL
    };
};