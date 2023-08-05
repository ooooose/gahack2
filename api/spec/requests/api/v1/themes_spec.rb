require "rails_helper"

RSpec.describe "Api::V1::Themes", type: :request do
  describe "GET /index" do
    it "successfully display themes" do
      create_list(:theme, 10)
      get "/api/v1/themes"
      expect(response.status).to eq(200)
    end

    it "display all themes" do
      create_list(:theme, 10)
      get "/api/v1/themes"
      json = JSON.parse(response.body)
      expect(json.length).to eq(10)
    end
  end

  describe "Get /show" do
    it "successfully fetch the specific theme" do
      theme = create(:theme)
      get "/api/v1/themes/#{theme.id}"
      expect(response.status).to eq(200)
    end

    it "fetch the specific theme correctly" do
      theme = create(:theme)
      get "/api/v1/themes/#{theme.id}"
      json = JSON.parse(response.body)
      expect(json["title"]).to eq(theme.title)
    end
  end
end
