class ScaleSerializer < ActiveModel::Serializer
  attributes :id, :notes, :name
  has_one :theory_game_id
end
