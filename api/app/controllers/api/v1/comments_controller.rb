class Api::V1::CommentsController < BaseController
  def index
    picture = Picture.includes(:user).find(params[:picture_id])
    @comments = picture.comments

    render json: @comments, each_serializer: Api::V1::CommentSerializer
  end

  def create
    @comment = current_user.comments.build(comment_params)
    if @comment.save
      render json: @comment, status: :ok
    else
      render_error400(nil, @comment.error.full_messages)
    end
  end

  def destroy
    @comment = current_user.comments.find(params[:id])
    @comment.destroy!
    render json: { status: :ok, message: "comment successfully deleted." }
  end

  def update
    @comment = current_user.comments.find(params[:id])
    if @comment.update(update_comment_params)
      render json: @comment, status: :ok
    else
      render_error400(nil, @comment.error.full_messages)
    end
  end

  private

    def comment_params
      params.require(:comment).permit(:body, :picture_id)
    end

    def update_comment_params
      params.require(:comment).permit(:body)
    end
end
