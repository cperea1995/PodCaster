export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';

export const receiveCurrentSong = (songURL) => {
    return {
        type: RECEIVE_CURRENT_SONG,
        songURL
    };
};