class Api::V1::LikeSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :picture_id
  has_many :users
  has_many :pictures
end
