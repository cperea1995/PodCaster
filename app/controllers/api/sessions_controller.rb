class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:email],params[:user][:password])

        if @user
            login!(@user)
           render "api/users/show"
        else
            render json: ["No user"], status: 422
        end
    end

    def destroy
         if logged_in?

            logout!
            render json: {}
        else
            render json: ["No User to Log Out"], status: 404
        end
    end
end