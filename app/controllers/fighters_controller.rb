class FightersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
    def index
        render json: Fighter.all
    end
    
    def show
        fighter = find_fighter
        render json: fighter
    end

    def update
        fighter = find_fighter
        fighter.update(fighter_params)
        render json: fighter
    end

    def create
        fighter = Fighter.create!(fighter_params)
        render json: fighter, status: :created
    end

    def destroy
        fighter = find_fighter
        fighter.destroy
        head :no_content
    end

    private

    def find_fighter
        Fighter.find_by(params[:id])
    end

    def fighter_params
        params.permit(:nickname, :name, :age, :height, :weight, :reach, :fight_record)
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
    def render_not_found_response
        render json: { error: "not found" }, status: :not_found
    end

end
