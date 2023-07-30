class Api::V1::CommentSerializer < ActiveModel::Serializer
  attributes %w[body created_at]

  belongs_to :user
end
