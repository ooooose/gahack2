require "rails_helper"

RSpec.describe "Api::V1::Pictures", type: :request do
  describe "GET /index" do
    it "display all pictures" do
      create_list(:picture, 10)
      get "/api/v1/pictures"
      json = JSON.parse(response.body)
      expect(response.status).to eq(200)
      expect(json.length).to eq(10)
    end
  end

  describe "POST /create" do
    xit "successfully create picture" do
      # 認証機能が作成できたら記述する。
    end
  end

  describe "GET /show" do
    it "display the specific picture" do
      picture = create(:picture)
      get "/api/v1/pictures/#{picture.id}"
      json = JSON.parse(response.body)
      expect(response).to have_http_status(:success)
      expect(json['image']).to eq(picture.image)
    end
  end
end
