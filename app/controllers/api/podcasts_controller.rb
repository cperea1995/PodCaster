class Api::PodcastsController < ApplicationController

    def index
        @podcasts = Podcast.all 
    end

    def create
        @podcast = Podcast.new(podcast_params)

        if @podcast.save
            render json: {}
        else
            render json: @podcast.errors.full_messages, status: 422
        end
    end

    def show
        @podcast = Podcast.find(params[:id])

        if @podcast
            render '/api/podcasts/show'
        else
            render json: ["No Podcast found"], status: 404
        end
    end

    def delete
    end

    private

    def podcast_params
        params.require(:podcast).permit(:podcast_name, :user_id)
    end
end