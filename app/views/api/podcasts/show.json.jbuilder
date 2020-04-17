json.extract! @podcast, :id, :podcast_name
json.photoUrl url_for(@podcast.podcast_art)
json.episode_names @podcast.episodes
json.caster_name @podcast.user