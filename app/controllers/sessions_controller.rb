class SessionsController < ApplicationController
  def login
    render component: 'Login'
  end
end