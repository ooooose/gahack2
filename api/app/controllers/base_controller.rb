class BaseController < ApplicationController
  include Api::ExceptionHandler
  include FirebaseAuth
  include ActionController::HttpAuthentication::Token::ControllerMethods
  before_action :authenticate

  def authenticate
    authenticate_with_http_token do |token, _options|
      result = verify_id_token(token)

      if result[:errors]
        render_error400(nil, result[:errors])
      else
        @current_user = User.find_or_create_user(result)
      end
    end
  end

  attr_reader :current_user
end
