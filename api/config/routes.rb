Rails.application.routes.draw do
  namespace :api, format: "json" do
    namespace :v1 do
      resources :users, only: %i[show]
      resource :profile, only: %i[show]
      resource :authentication, only: %i[create]
      resources :themes, only: %i[index show]
      resources :pictures, only: %i[index create show destroy] do
        resources :comments, only: %i[index create destroy update]
        get 'likes', to: 'pictures#likes'
      end
      resources :likes, only: %i[index create destroy]
    end
  end
end
