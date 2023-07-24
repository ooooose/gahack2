class Api::V1::UserSerializer < ActiveModel::Serializer
  attributes :id
  has_many :pictures, serializer: PictureSerializer
end
