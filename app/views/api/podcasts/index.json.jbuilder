@podcasts.each do |podcast|
    json.set! podcast.id do
        json.partial! 'api/podcasts/podcast', podcast: podcast
        json.photoUrl url_for(podcast.podcast_art)
    end
end
