class UserOnlineClassSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :online_class
end
