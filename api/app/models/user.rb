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
  validates :name, presence: true, length: { maximum: 40 }
  validates :uid, presence: true, uniqueness: true
  validates :description, length: { maximum: 160 }
end
