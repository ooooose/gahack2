class Api::V1::ThemeSerializer < ActiveModel::Serializer
  attributes %i[id title]
  has_many :pictures, selializer: PictureSerializer
end
