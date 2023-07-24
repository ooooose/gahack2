class Api::V1::ThemesController < BaseController
  before_action :set_theme, only: %i[show]

  def index
    themes = Theme.includes(:picture).all
    render_json = ActiveModelSerializers::SerializableResource.new(
      resource: themes,
      each_serializer: ThemeSerializer,
    ).as_json

    render json: render_json
  end

  def show
    render_json = ActiveModelSerializers::SerializableResource.new(
      resource: @theme,
      serializer: ThemeSerializer,
    ).as_json

    render json: render_json
  end

  private
    
    def set_theme
      @theme = Theme.includes(:pictures).find(params[:id])
    end
end
