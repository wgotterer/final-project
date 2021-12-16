class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :email
  has_many :online_classes
end
