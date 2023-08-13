module Api::ExceptionHandler
  extend ActiveSupport::Concern

  included do
    rescue_from StandardError do |exception|
      render_error500(exception, nil)
    end
    rescue_from ActiveRecord::RecordNotFound, with: :render_error404
    rescue_from ActiveRecord::RecordInvalid do |exception|
      render_error400(exception, exception.record.errors.full_messages)
    end
  end

  private

    def render_error400(exception = nil, messages = nil)
      render_error(400, "Bad Request", exception&.message, *messages)
    end

    def render_error404(exception = nil, messages = nil)
      render_error(404, "Record Not Found", exception&.message, *messages)
    end

    def render_error500(exception = nil, messages = nil)
      render_error(500, "Internal Server Error", exception&.message, *messages)
    end

    def render_error(code, message, *error_messages)
      response = { message:, errors: error_messages.compact }

      render json: response, status: code
    end
end
