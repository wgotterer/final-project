class TheoryGame < ApplicationRecord
    has_many :scales, dependent: :destroy
    has_many :user_theory_games, dependent: :destroy
    has_many :users, through: :user_theory_games
end
