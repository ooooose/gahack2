require "rails_helper"

RSpec.describe "Api::V1::Likes", type: :request do
  describe "GET /pictures/{picture_id}/likes" do
    xit 'is able to get all likes of the picture' do
      @picture = create(:picture)
      create_list(:like, 10, picture_id: @picture.id)
      get "/api/v1/pictures/#{@picture.id}/likes"
      json = JSON.parse(response.body)

      expect(response.status).to eq(200)

      expect(json['data'].length).to eq(10)
    end
  end
end
