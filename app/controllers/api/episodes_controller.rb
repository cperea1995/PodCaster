class Api::EpisodesController < ApplicationController
    def index
        @episodes = Episode.all
    end

    def create
        @episode = Episode.new(episode_params)

        if @episode.save
            render json: {}
        else
            render json: @episode.errors.full_messages, status: 422
        end
    end

     def show
        @episode = episode.find(params[:id])

        if @episode
            render '/api/episodes/show'
        else
            render json: ["No episode found"], status: 404
        end
    end

    private

    def episode_params
        params.require(:episode).permit(:episode_name, :podcast_id)
    end

end