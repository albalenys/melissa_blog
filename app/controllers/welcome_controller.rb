class WelcomeController < ApplicationController
  def index
    render component: 'Home'
  end
end