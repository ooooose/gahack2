class Api::V1::LikesController < BaseController
  before_action :set_picture, only: %i[create destroy]
  skip_before_action :authenticate, only: %w[index]

  def index
    likes = Like.all
    render json: {status: :ok, count: likes}
  end

  def create
    current_user.like(@picture)
    render json: { status: :ok, message: "you like successfully picture." }
  end

  def destroy
    current_user.unlike(@picture)
    render json: { status: :ok, message: "you unlike successfully picture." }
  end

  private

    def set_picture
      @picture = Picture.find(params[:picture_id])
    end
end
