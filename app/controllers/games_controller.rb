# require "httparty"
class  GamesController < ApplicationController

	def index
		games = Game.all
		render json: games
	end

	def show
		game = Game.find_by(id: params[:id])
		response = HTTParty.get("https://api.boardgameatlas.com/api/search?name=#{game.name}&client_id=aMBScZbBDn")
		render json:  response.body, only: [:name, :min_players, :max_players, :min_playtime, :max_playtime, :min_age, :discritpion, :image_url, :publisher], include: [:game]
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
		if game && game.user.id == session[:user_id]
		 if game.update(game_params)
			render json: game
		 else 
	  	render json: {error: game.errors.full_messsages.to_sentence}, status: :unprocessable_entity
		 end
		end
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
	
	def findgame
   		response = HTTParty.get("https://api.boardgameatlas.com/api/search?name=Splendor&client_id=aMBScZbBDn")
		render json: response.body 
		
	end
	
      private

	def game_params
		params.permit(:name, :rating, :user_id)
	end


end
