Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :categories, only: [:index, :show]
    resources :products, only: [:show]
    resources :shopping_carts, only: [:show, :create, :destroy]
  end

  root "static_pages#root"
end
