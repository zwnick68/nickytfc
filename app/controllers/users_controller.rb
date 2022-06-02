class UsersController < ApplicationController
# rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
skip_before_action :authorized, only: [:show]

    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end

      def create
        user = User.create(user_params)
        if user.valid?
          render json: user, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
      end

      private 

      def render_unprocessable_entity(invalid)
        render json: {error: invalid.record.errors}, status: :unprocessable_entity
      end

      private

      def user_params
        params.permit(:username, :password, :password_confirmation)
      end

end
