class Api::V1::PicturesController < BaseController
  before_action :set_picture, only: %i[show destroy]

  def index
    pictures = Picture.includes(:user, :theme, :likes, :comments).all.page(params[:page]).per(6)

    render json: pictures, each_serializer: Api::V1::PictureSerializer
  end

  def show
    render json: @picture, serializer: Api::V1::PictureSerializer
  end

  def create
    picture = @current_user.build(picture_params)

    if picture.save
      render json: picture
    else
      render json: { status: 400 }
    end
  end

  def destroy
    @picture.destroy!
    render json: @picture
  end

  private

    def set_picture
      @picture = Picture.includes(:user, :theme).find(params[:id])
    end

    def picture_params
      params.require(:picture).permit(:image, :theme_id, :frame_id)
    end
end
