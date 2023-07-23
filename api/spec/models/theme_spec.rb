require "rails_helper"

RSpec.describe Theme, type: :model do
  it "valid theme" do
    theme = create(:theme)
    expect(theme).to be_valid
  end

  it "invalid theme of duplicated title" do
    Theme.create(
      title: "ドラえもん",
    )

    theme = Theme.new(
      title: "ドラえもん",
    )
    theme.valid?
    expect(theme).not_to be_valid
  end

  it "invalid theme of no title" do
    theme = build(:theme, title: nil)
    theme.valid?
    expect(theme).not_to be_valid
  end
end
