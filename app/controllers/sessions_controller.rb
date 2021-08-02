class SessionsController < ApplicationController
	def create
		p "loggging in"
		user = User.find_by(username: params[:username])
		if user&.authenticate(params[:password])
			session[:user_id] = user.id
			render json: user, status: :accepted
		else
			render json: { error: "Invaid Username or Password" }, status: :unauthorized	
		end

	end

	def show
		user = User.find_by(id: session[:user_id])
		if user
		  render json: user
		else
		  render json: { error: "Not authorized" }, status: :unauthorized
		end
	      end
	
	def destroy
		session.delete :user_id
		head :no_content
	      end 
end

