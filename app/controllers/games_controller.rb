class GamesController < ApplicationController
	def index
		games = Game.all
		render json: games
	end

	def show
		game = Game.find_by(id: params[:id])
		render json: game
	end

	def create
		game = Game.new(game_params)
			if game.save
				render json: game, status: :created
			else
				render json: {error: "not valid"}, status: :not_created
			end

	end

	def update
		game = Game.find_by(id: params[:id])
		game.update(game_params)
		render json: game
	end
	
	def destroy
		game = Game.find_by(id: params[:id])
		Game.destroy
		render json: { message: "Deleted" }, status: :no_content
	      end

	def favorite
		render json: {}
		
	end
	
      private

	def game_params
		params.permit(:name)
	end

end
