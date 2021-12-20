class OnlineClassSerializer < ActiveModel::Serializer
  attributes :id, :name, :difficulty, :price, :description, :video, :available
  
end
