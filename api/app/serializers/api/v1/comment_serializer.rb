class Api::V1::CommentSerializer < ActiveModel::Serializer
  attributes %i[body created_at]

  belongs_to :picture
  belongs_to :user
end
