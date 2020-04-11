export const getPodcasts = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/podcasts'
    });
};

export const getPodcast = (podcastId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/podcasts/${podcastId}`
    });
};