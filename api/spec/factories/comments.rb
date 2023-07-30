FactoryBot.define do
  factory :comment do
    association :picture
    association :user
    sequence(:body) { |n| "comment_#{n}" }
  end
end
