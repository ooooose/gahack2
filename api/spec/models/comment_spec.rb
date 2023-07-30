require 'rails_helper'

RSpec.describe Comment, type: :model do
  describe "create Comment Model" do
    wrong_text = "a" * 201
    let!(:user) { create(:user) }
    let!(:picture) { create(:picture) }
    let!(:comment) { create(:comment, user_id: user.id, picture_id: picture.id) }
    let(:no_body_comment) { build(:comment, body: nil, user_id: user.id, picture_id: picture.id) }
    let(:too_long_body_comment) { build(:comment, body: wrong_text, user_id: user.id, picture_id: picture.id) }

    context "when add valid comment" do
      it "response is ok" do
        expect(comment).to be_valid
      end
    end

    context "when add comment of no body" do
      it "response id validation error" do
        no_body_comment.valid?
        expect(no_body_comment).not_to be_valid
      end
    end

    context "when add commment of too long body" do
      it "response id validation error" do
        too_long_body_comment.valid?
        expect(too_long_body_comment).not_to be_valid
      end
    end
  end

  describe "check association" do
    context "when is association for users" do
      it "is one comment for many users" do
        expect(described_class.reflect_on_association(:user).macro).to eq :belongs_to
      end
    end

    context "when is association for pictures" do
      it "is one comment for many pictures" do
        expect(described_class.reflect_on_association(:picture).macro).to eq :belongs_to
      end
    end
  end
end
