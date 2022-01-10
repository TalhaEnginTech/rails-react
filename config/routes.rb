Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :posts
    end
  end
  #index action
  get 'products', to: 'products#index', as: 'products'
  #show action
  get 'products/:id', to: 'products#show', as: 'product', id: /\d+/
  #new action
  get 'products/new', to: 'products#new', as: 'new_product'
  #create action
  post 'products', to: 'products#create'

end
