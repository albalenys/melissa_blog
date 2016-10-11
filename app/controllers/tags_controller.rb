class TagsController < ApplicationController
  def show
    render component: 'Tag'
  end

  def tags
  	tags = Tag.all
  	render json: tags
  end

  def posts_by_tag
  	tag = Tag.find(params[:id])
    posts = tag.posts
  	render json: {tag: tag.name, posts: posts}
  end
end