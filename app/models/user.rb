class User < ApplicationRecord

	validates :username, presence: true, uniqueness: { message: "username already taken"}
	
	has_many :the_tables
	has_many :games, through: :the_tables
	has_secure_password 
end
