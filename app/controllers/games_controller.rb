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
			game.the_tables.create(user_id: params[:user_id])
	
				
				render json: game, include: [:users]
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
		games= Game.all
		byebug
		
		render json: all_games
		
	end
	
      private

	def game_params
		params.permit(:name)
	end

end
