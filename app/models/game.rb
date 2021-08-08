class Game < ApplicationRecord

	validates :name, presence: true
	
	has_many :the_tables
	has_many :users, through: :the_tables
end
