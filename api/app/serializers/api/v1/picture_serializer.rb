class Api::V1::PictureSerializer < ActiveModel::Serializer
  attributes %i[id image frame_id created_at]

  has_many :comments, serializer: Api::V1::CommentSerializer
  has_many :likes
  belongs_to :theme
  belongs_to :user
end
