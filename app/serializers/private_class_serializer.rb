class PrivateClassSerializer < ActiveModel::Serializer
  attributes :id, :goal, :date
  has_one :user
end
