class PostsController < ApplicationController
  def new
    render component: 'NewPostForm'
  end

  def create
    post = Post.new(post_params.merge(admin_id: session[:admin_id]))

    if post.save
      params[:tags].split(",").each do |tag_name|
        tag = Tag.find_or_create_by(name: tag_name)
        post.tags << tag
      end

      redirect_to "/"
    else
      render component: 'NewPostForm', props: {error: 'Must add both title and body to new post.'}
    end
  end

  def show
    post = Post.find(params[:id])
    render component: 'Post', props: post
  end

  private

  def post_params
    params.require(:post).permit(:title, :body)
  end
end