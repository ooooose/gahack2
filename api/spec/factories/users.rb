FactoryBot.define do
  factory :user do
    sequence(:name) {|n| "test_user_#{n}" }
    sequence(:description) { |n| "hello! I'm test_user_#{n}" }
    sequence(:avatar) { |n| "avatar_key_#{n}" }
    sequence(:twitter_name) {|n| "test_user_#{n}" }
  end
end
