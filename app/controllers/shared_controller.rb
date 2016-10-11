class SharedController < ApplicationController
  def index
    render component: 'Home'
  end

  def tags
  	tags = Tag.all
  	render json: tags
  end
end