class SessionsController < ApplicationController
    def index
    end

    def create
        user = User.find_by(username: params[:username])
        session[:user_id] = user.id
        render json: user
    end

    def destroy
        session.delete :user_id
        head :no_content 
    end
end
