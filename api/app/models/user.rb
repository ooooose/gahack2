# Table name: users
#
#  id               :bigint           not null, primary key
#  uid              :string           not null
#  name             :string(40)       not null
#  avatar           :string
#  description      :text
#  twitter_username :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
# Indexes
#
#  index_users_on_uid  (uid) UNIQUE
#
class User < ApplicationRecord
  has_many :pictures, -> { order(created_at: :desc) }, inverse_of: :user, dependent: :destroy
  has_many :likes, inverse_of: :user, dependent: :destroy
  has_many :like_pictures, through: :likes, source: :picture
  has_many :comments, inverse_of: :user, dependent: :destroy
  has_many :comment_pictures, through: :comments, source: :picture

  validates :name, presence: true, length: { maximum: 40 }
  validates :uid, presence: true, uniqueness: true
  validates :description, length: { maximum: 160 }

  def like(picture)
    like_pictures << picture
  end

  def unlike(picture)
    like_pictures.destroy(picture)
  end
end
