class Api::V1::BaseController < ApplicationController
  before_action :authenticate

  def authenticate
  end
end
