class User < ApplicationRecord
	has_many :the_tables
	has_many :games, through: :the_tables
	has_secure_password 
end
