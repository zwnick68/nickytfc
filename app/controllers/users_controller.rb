class UsersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end

      def create
        user = User.create!(user_params) 
        render json: user
      end

      private 

      def render_unprocessable_entity(invalid)
        render json: {error invalid.record.errors}, status: :unprocessable_entity
      end

      def user_params
        params.permit(:username, :password)
      end

end
