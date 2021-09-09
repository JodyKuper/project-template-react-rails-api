class User < ApplicationRecord
	validates :username, presence: true, uniqueness: true 
	has_many :games
	has_secure_password 
end