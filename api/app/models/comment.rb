# Table name: comments
#
#  id         :bigint           not null, primary key
#  body       :text             not null, limit   200
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  article_id :bigint           not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_comments_on_picture_id  (picture_id)
#  index_comments_on_user_id     (user_id)
#
# Foreign Keys
#
#  picture_id => pictures.id)
#  user_id => users.id
#
class Comment < ApplicationRecord
  belongs_to :picture
  belongs_to :user

  validates :body, presence: true, length: { maximum: 200 }
end
