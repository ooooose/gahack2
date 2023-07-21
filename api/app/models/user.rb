class User < ApplicationRecord
  validates :name, presence: true, length: { maximum: 40 }
  validates :uid, presence: true, uniqueness: true
  validates :description, length: { maximum: 160 }
end
