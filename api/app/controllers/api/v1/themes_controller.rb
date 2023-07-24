class Api::V1::ThemesController < BaseController
  before_action :set_theme, only: %i[show]

  def index
    themes = Theme.includes(:pictures).all

    render json: themes
  end

  def show
    render json: @theme
  end

  private
    
    def set_theme
      @theme = Theme.includes(:pictures).find(params[:id])
    end
end
