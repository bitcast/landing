class UserMailer < ActionMailer::Base
  default from: "info@backpack.io"

  def welcome_email(user)
    @user = user
    mail :subject => "Welcome to Bacpack!",
         :to      => user.email
  end
end
