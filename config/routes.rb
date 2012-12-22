Launchpage::Application.routes.draw do  
  root :to => "users#new"
  match 'success' => 'static_pages#success'
  resources :users
  match 'blog' => 'http://bitcastio.tumblr.com'
end
