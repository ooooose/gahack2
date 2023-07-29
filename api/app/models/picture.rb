# Table name: pictures
#
#  id         :bigint           not null, primary key
#  image      :string           not null
#  frame_id   :integer          not null, default: 0
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
#  Foreign Keys
#
#  theme_id => themes.id
#  user_id => users.id
#
class Picture < ApplicationRecord
  belongs_to :user
  belongs_to :theme
  has_many :likes, inverse_of: :picture, dependent: :destroy

  validates :image, presence: true
  validates :frame_id, presence: true
end
