Rails.application.routes.draw do
  namespace :api do
    resources :storm_posts, only: [:index, :create, :destroy]
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
