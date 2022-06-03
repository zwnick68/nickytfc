class SessionsController < ApplicationController
    # skip_before_action :authorized, only: [:create]
    def index
    end

    def login
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
        session[:user_id] = user.id
        # render json: user, status: :created
        redirect_to fighters_path
        else 
            render json: {error: {login: "Invalid username or password"}}, status: :unauthorized
    end
end
    def logout
        session.delete :user_id
        head :no_content 
    end
end
