Rails.application.routes.draw do
  
  namespace :api do
  resources :user_online_classes
  resources :online_classes
  resources :private_classes
  resources :user_theory_games
  resources :scales
  resources :theory_games
  resources :users
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
end
