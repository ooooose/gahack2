class Api::V1::UserSerializer < ActiveModel::Serializer
  attributes %i[id name avatar uid] 
  has_many :pictures
end
