class Api::V1::PictureSerializer < ActiveModel::Serializer
  attributes %i[id image frame_id created_at]

  belongs_to :theme
  belongs_to :user
end
