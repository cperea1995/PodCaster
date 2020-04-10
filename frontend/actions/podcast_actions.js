import * as PodcastUtil from '../util/podcast_api_util';

export const RECEIVE_PODCASTS = 'RECEIVE_PODCASTS'
export const RECEIVE_PODCAST = 'RECEIVE_PODCAST'

const receivePodcasts = (podcasts) => {
    return {
        type: RECEIVE_PODCASTS,
        podcasts
    };
};

const receivePodcast = (podcast) => {
    return {
        type: RECEIVE_PODCAST,
        podcast
    };
};

export const getPodcasts = () => dispatch => {
    return PodcastUtil.getPodcasts().then( podcasts => dispatch(receivePodcasts(podcasts)));
};

export const getPodcast = (podcastId) => dispatch => {
    return PodcastUtil.getPodcast().then( podcast => dispatch(receivePodcast(podcast)));
};