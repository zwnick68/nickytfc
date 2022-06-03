Rails.application.routes.draw do
  resources :weightclasses
  resources :promotions
  resources :fighters
  resources :users
  resources :sessions

  post '/login', to: 'sessions#login'
  post '/signup', to: 'users#create'
end
