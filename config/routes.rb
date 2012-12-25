Launchpage::Application.routes.draw do  
  ActiveAdmin.routes(self)

  devise_for :admin_users, ActiveAdmin::Devise.config

  root :to => "users#new"
  match 'success' => 'static_pages#success'
  resources :users
end
