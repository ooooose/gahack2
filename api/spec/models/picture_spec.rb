require "rails_helper"

RSpec.describe Picture, type: :model do
  it "is valid picture" do
    picture = create(:picture)
    expect(picture).to be_valid
  end
end
