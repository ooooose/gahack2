require "rails_helper"

RSpec.describe Like, type: :model do
  before do
    @user = create(:user)
    @picture = create(:picture)
    @like = create(:like, user_id: @user.id, picture_id: @picture.id)
  end

  it "is valid like instance" do
    expect(@like).to be_valid
  end

  it "is invalid" do
    other_like = build(:like, user_id: @user.id, picture_id: @picture.id)
    other_like.valid?

    expect(other_like).not_to be_valid
  end

  it "is reflected on assciation for users" do
    expect(described_class.reflect_on_association(:user).macro).to eq :belongs_to
  end

  it "is reflected on assciation for pictures" do
    expect(described_class.reflect_on_association(:picture).macro).to eq :belongs_to
  end
end
