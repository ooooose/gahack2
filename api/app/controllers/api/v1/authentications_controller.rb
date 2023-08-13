class Api::V1::AuthenticationsController < BaseController
  def create
    render json: { message: "User successfully logged in!" } if current_user
  end
end
