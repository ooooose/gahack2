class Api::V1::PicturesController < BaseController
  before_action :set_picture, only: %i[show]

  def index
    pictures = Picture.includes(:user, :theme).all

    render json: pictures
  end

  def show
    render json: @picture
  end

  private

    def set_picture
      @picture = Picture.includes(:user, :theme).find(params[:id])
    end
end
