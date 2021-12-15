class OnlineClass < ApplicationRecord
    has_many :user_online_classes, dependent: :destroy
    has_many :users, through: :online_classes
end
