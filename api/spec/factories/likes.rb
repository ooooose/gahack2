FactoryBot.define do
  factory :like do
    association :picture
    association :user
  end
end
