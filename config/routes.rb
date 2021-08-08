Rails.application.routes.draw do
  # resources :the_tables
  resources :games
  resources :users, except: [:create]
  get "/favorite", to: "games#favorite"
  post '/signup', to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"


  get "/me", to: "sessions#show"
#   get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end