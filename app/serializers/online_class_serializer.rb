class OnlineClassSerializer < ActiveModel::Serializer
  attributes :id, :name, :difficulty, :price, :description, :video
  has_many :user_online_classes
end
