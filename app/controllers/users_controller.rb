class UsersController < ApplicationController
	def index 
		users=User.all
		render json: users
	end

	def show
		user = User.find_by(id: params[:id])
		render json: user
	end

	def create
		p "SIGNUP"
		user = User.new(user_params)
			if user.save
				render json: user, status: :created
			else
				render json: { error: "Invaid Username or Password" }, status: :unauthorized		
			end
	end



	def update
		user = User.find_by(id: params[:id])
		user.update(user_params)
		render json: user
	end

	def destroy
		user = User.find_by(id: params[:id])
		user.destroy
		render json: { message: "Deleted" }, status: :no_content
	      end

	      private

	      def user_params
		      params.permit(:username, :password)
	      end
end
