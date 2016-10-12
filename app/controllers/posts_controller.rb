class PostsController < ApplicationController
  def new
    render component: 'NewPostForm'
  end
end