Rails.application.routes.draw do
  namespace :api, format: "json" do
    namespace :v1 do
      resources :users, only: %w[show]
      resources :themes, only: %i[index show]
      resources :pictures, only: %i[index create show destroy]
    end
  end
end
