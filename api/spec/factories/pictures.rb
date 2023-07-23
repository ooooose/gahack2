FactoryBot.define do
  factory :picture do
    sequence(:image) {|n| "image_#{n}" }
    frame_id { 0 }
    association :user
    association :theme
  end
end
