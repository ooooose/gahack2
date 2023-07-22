# Table name: themes 
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Theme < ApplicationRecord
  has_many :pictures, -> { order(created_at: :desc) }, dependent: :destroy

  validates :title, presence: true, uniqueness: true
end
