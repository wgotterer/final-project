class User < ApplicationRecord
    has_secure_password
    has_many :private_classes , dependent: :destroy
    has_many :user_theory_games, dependent: :destroy
    has_many :theory_games, through: :user_theory_games
    has_many :user_online_classes, dependent: :destroy
    has_many :online_classes, through: :user_online_classes
end
