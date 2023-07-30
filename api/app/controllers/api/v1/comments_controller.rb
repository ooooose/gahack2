class Api::V1::CommentsController < BaseController

  def index 
    picture = Picture.include(:user, :theme).find(params[:picture_id])
    comments = picture.comments

    render json: comments, each_serializer: Api::V1::CommentSerializer
  end

  def create
  end
end
