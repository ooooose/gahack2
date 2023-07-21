require 'rails_helper'

RSpec.describe User, type: :model do

  it "is invalid without name" do
    sample_user = FactoryBot.build(:user, name: nil)
    sample_user.valid?
    expect(sample_user.errors[:name]).to include("can't be blank")
  end

  it "is valid user" do
    @user = FactoryBot.create(:user)
    expect(@user).to be_valid
  end

  it "is valid users" do
    user = User.new(
      uid: "example_uid",
      name: "Oose",
      twitter_name: "ooooose",
      description: "hello! I'm ooooose",
      avatar: "avatar_01"
    )
    expect(user).to be_valid
  end
end
