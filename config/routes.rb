Rails.application.routes.draw do
root 'calenders#index'
resources :calenders, except: :show
end
