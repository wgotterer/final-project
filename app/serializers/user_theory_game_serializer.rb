class UserTheoryGameSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :theory_game
end
