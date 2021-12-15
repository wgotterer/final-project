class UserTheoryGame < ApplicationRecord
  belongs_to :user
  belongs_to :theory_game
end
