class Api::V1::UserSerializer < ActiveModel::Serializer
  attributes %i[id name avatar uid]
  has_many :pictures, each_serializer: Api::V1::PictureSerializer
  has_many :comments, each_serializer: Api::V1::CommentSerializer
end
