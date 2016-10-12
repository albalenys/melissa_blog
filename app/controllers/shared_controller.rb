class SharedController < ApplicationController
  def index
    render component: 'Home'
  end
end