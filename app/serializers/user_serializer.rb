class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :email, :admin
  has_many :online_classes
  has_many :private_classes
end
