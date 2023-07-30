Rails.application.routes.draw do
  namespace :api, format: "json" do
    namespace :v1 do
      resources :users, only: %w[show]
      resources :themes, only: %w[index show]
      resources :pictures, only: %w[index create show destroy]
      resources :likes, only: %w[create destroy]
    end
  end
end
