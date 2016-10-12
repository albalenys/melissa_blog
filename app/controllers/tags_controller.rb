class TagsController < ApplicationController
  def show
    render component: 'Tag'
  end

  # -- Ajax Routes --

  def tags
    # Returns all tags.
  	tags = Tag.all
  	render json: tags
  end

  def posts_by_tag
    # Returns all posts of a specific tag.
  	tag = Tag.find(params[:id])
    posts = tag.posts
  	render json: {tag: tag.name, posts: posts}
  end
end