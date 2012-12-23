class UsersController < ApplicationController

  def new
    @user = User.new
  end
  
  def create 
    @user = User.new(params[:user])
    if @user.save
      UserMailer.welcome_email(@user).deliver
      render json: @user, only: :email
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end
  
  def index 
    @users = User.all 
  end
end
