FactoryBot.define do
  factory :theme do
    sequence(:title) {|n| "title_#{n}" }
  end
end
