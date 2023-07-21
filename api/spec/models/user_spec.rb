require 'rails_helper'

RSpec.describe User, type: :model do
  it "is valid user" do
    user = create(:user)
    expect(user).to be_valid
  end

  it "is valid without description" do
    user = create(:user, description: nil)
    expect(user).to be_valid
  end 

  it "is invalid without name" do
    user = build(:user, name: nil)
    user.valid?
    expect(user.errors[:name]).to include("can't be blank")
  end

  it "is invalid without uid" do
    user = build(:user, uid: nil)
    user.valid?
    expect(user.errors[:uid]).to include("can't be blank")
  end

end
