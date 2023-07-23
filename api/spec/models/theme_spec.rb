require "rails_helper"

RSpec.describe Theme, type: :model do
  it "is valid theme" do
    theme = create(:theme)
    expect(theme).to be_valid
  end

  it "is invalid theme of duplicated title" do
    create(:theme, title: "ドラえもん")

    theme = build(:theme, title: "ドラえもん")
    theme.valid?
    expect(theme).not_to be_valid
  end

  it "is invalid theme of no title" do
    theme = build(:theme, title: nil)
    theme.valid?
    expect(theme).not_to be_valid
  end
end
