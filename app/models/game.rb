class Game < ApplicationRecord

	validates :name, presence: true	
	validates :rating, numericality: {less_than_or_equal_to: 10}
	belongs_to :user
end