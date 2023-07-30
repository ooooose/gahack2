Rails.application.routes.draw do
  namespace :api, format: "json" do
    namespace :v1 do
      resources :users, only: %i[show]
      resources :themes, only: %i[index show]
      resources :pictures, only: %i[index create show destroy] do
        resources :comments, only: %i[index create destroy update]
      end
      resources :likes, only: %i[create destroy]
    end
  end
end
