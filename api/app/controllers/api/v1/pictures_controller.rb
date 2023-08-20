class Api::V1::PicturesController < BaseController
  before_action :set_picture, only: %i[show destroy]

  def index
    pictures = Picture.includes(:user, :theme, :comments).all.page(params[:page]).per(6)
    render json: pictures, status: :ok
  end

  def show
    render json: @picture, serializer: Api::V1::PictureSerializer
  end

  def create
    picture = current_user.build(picture_params)

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

  def likes
    @picture = Picture.includes(:user, :theme).find(params[:picture_id])
    like_id = @picture.likes.find_by(user_id: current_user.id)&.id
    liked = current_user.like?(@picture)
    likes = @picture.likes.length
    render json: { status: :ok, like_id:, liked:, likes: }
  end

  private

    def set_picture
      @picture = Picture.includes(:user, :theme).find(params[:id])
    end

    def picture_params
      params.require(:picture).permit(:image, :theme_id, :frame_id)
    end
end
