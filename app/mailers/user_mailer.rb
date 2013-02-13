class UserMailer < ActionMailer::Base
  default from: "info@bitcast.io"

  def welcome_email(user)
    @user = user
    mail :subject => "Welcome to Bitcast!",
         :to      => user.email
  end
end
