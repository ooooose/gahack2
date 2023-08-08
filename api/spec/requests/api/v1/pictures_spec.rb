require "rails_helper"

RSpec.describe "Api::V1::Pictures", type: :request do
  describe "GET /index" do
    it "successfully display all pictures" do
      create_list(:picture, 10)
      get "/api/v1/pictures"
      expect(response.status).to eq(200)
    end

    it "display pictures correctly for first page" do
      create_list(:picture, 10)
      get "/api/v1/pictures?page=1"
      json = JSON.parse(response.body)
      expect(json.length).to eq(6)
    end

    it "display pictures correctly for first page" do
      create_list(:picture, 10)
      get "/api/v1/pictures?page=2"
      json = JSON.parse(response.body)
      expect(json.length).to eq(4)
    end
  end

  describe "POST /create" do
    xit "successfully create picture" do
      # 認証機能が作成できたら記述する。
    end
  end

  describe "GET /show" do
    it "successfully display the specific picture" do
      picture = create(:picture)
      get "/api/v1/pictures/#{picture.id}"
      expect(response).to have_http_status(:success)
    end

    it "display the specific picture image" do
      picture = create(:picture)
      get "/api/v1/pictures/#{picture.id}"
      json = JSON.parse(response.body)
      expect(json["image"]).to eq(picture.image)
    end
  end
end
