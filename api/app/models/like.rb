# Table name: likes
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  picture_id :bigint           not null
#  user_id    :bigint           not null
#
# Index
#
#  index_likes_on_picture_id              (picture_id)
#  index_likes_on_user_id                 (user_id)
#  index_likes_on_user_id_and_picture_id  (user_id,picture_id) UNIQUE
#
# Foreign Keys
#
#  picture_id => pictures.id
#  user_id => users.id
#
class Like < ApplicationRecord
  belongs_to :picture
  belongs_to :user

  validates :user_id, uniqueness: { scope: :picture_id }
end
