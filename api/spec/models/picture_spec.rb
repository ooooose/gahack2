require "rails_helper"

RSpec.describe Picture, type: :model do
  before do
    @user = create(:user)
    @theme = create(:theme)
  end

  it "is valid picture" do
    picture = create(:picture)
    expect(picture).to be_valid
  end

  it "is invalid picture of no image" do
    picture = build(:picture, image: nil)
    picture.valid?
    expect(picture).not_to be_valid
  end

  it "is invalid picture of no frame_id" do
    picture = build(:picture, frame_id: nil)
    picture.valid?
    expect(picture).not_to be_valid
  end
end
