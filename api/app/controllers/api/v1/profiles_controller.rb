class Api::V1::ProfilesController < BaseController
  def show
    render_json = Api::V1::UserSerializer.new(current_user).serializable_hash.to_json
    render json: render_json
  end
end
