class Api::V1::PicturesController < BaseController
  before_action :set_picture, only: %i[show]

  def index
  end

  def show
  end

  private

    def set_picture
      @picture = Picture.find(params[:id])
    end
end
