class Api::V1::ThemesController < BaseController
  before_action :set_theme, only: %i[show]

  def index
    @themes = Theme.includes(:pictures).all

    render json: @themes, each_serializer: Api::V1::ThemeSerializer
  end

  def show
    render json: @theme, serializer: Api::V1::ThemeSerializer
  end

  private

    def set_theme
      @theme = Theme.includes(:pictures).find(params[:id])
    end
end
