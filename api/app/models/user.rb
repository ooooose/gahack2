class User < ApplicationRecord
  validates :user, presence: true, length: { maximum: 40 }
  validates :uid, presence: true, uniqueness: true
  validates :description, length: { maximum: 160 }
end
