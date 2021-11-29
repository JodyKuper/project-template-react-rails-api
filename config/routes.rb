Rails.application.routes.draw do
  
  get "/games/search", to: "games#findgame"
  resources :games
  resources :users, except: :update
  get "/favorite", to: "games#favorite"
  post '/signup', to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/favoriteGame", to: "games#favoriteGame"

  get "/me", to: "sessions#show"
#   get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end