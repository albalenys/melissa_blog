class SessionsController < ApplicationController
  def new
    #..
  end

  def create
    admin = Admin.find_by(username: params[:username])

    if admin && admin.authenticate(params[:password])
      session[:admin_id] = admin.id
      redirect_to root_path
    else
      render component: 'Login', props: {msg: 'Invalid username or password.'}
    end
  end

  def destroy
    session.clear
    redirect_to root_path
  end
end