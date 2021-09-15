# require "httparty"
class  GamesController < ApplicationController

	def index
		games = Game.all
		render json: games
	end

	def show
		game = Game.find_by(id: params[:id])
		response = HTTParty.get("https://api.boardgameatlas.com/api/search?name=#{game.name}&client_id=aMBScZbBDn")
		render json:  response.body
	
		
	end

	def create
		game = Game.new(game_params)
		if game.save		
		render json: game, include: [:users]
		else
	        	render json: {error: "not a game"}, status: :unauthorized
			end

	end

	def update
		
		game = Game.find_by(id: params[:id])
		game.update(game_params)
		render json: game
		
		
		
	end
	
	def destroy
		game = Game.find_by(id: params[:id])
		game.destroy
		render json: { message: "Deleted" }, status: :no_content
	      end

	def favorite
		games = Game.order(rating: :desc)
		render json: games
		
	end
	
	
	
      private

	def game_params
		params.permit(:name, :rating, :user_id)
	end


end
