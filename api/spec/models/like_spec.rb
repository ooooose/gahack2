require "rails_helper"

RSpec.describe Like, type: :model do
  describe "create like model" do
    let!(:user) { create(:user) }
    let!(:picture) { create(:picture) }
    let!(:like) { create(:like, user_id: user.id, picture_id: picture.id) }
    let(:other_like) { build(:like, user_id: user.id, picture_id: picture.id) }

    context "when is valid like" do
      it "is valid like instance" do
        expect(like).to be_valid
      end
    end

    context "when is invalid like" do
      it "is invalid" do
        other_like.valid?

        expect(other_like).not_to be_valid
      end
    end
  end

  describe "check association" do
    context "when is association for users" do
      it "is one like for many users" do
        expect(described_class.reflect_on_association(:user).macro).to eq :belongs_to
      end
    end

    context "when is association for pictures" do
      it "is one like for many pictures" do
        expect(described_class.reflect_on_association(:picture).macro).to eq :belongs_to
      end
    end
  end
end
