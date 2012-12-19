class UsersController < ApplicationController

  def new
    @user = User.new
  end
  
  def create 
    @user = User.new(params[:user])
    if @user.save
      UserMailer.welcome_email(@user).deliver
      redirect_to '/success'
    else 
      flash[:error] = "Sorry, your email could not be added."
      render 'new'
    end
  end
  
  def index 
    @users = User.all 
  end
end
