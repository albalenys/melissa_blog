class PostsController < ApplicationController
  def new
    render component: 'NewPostForm'
  end

  def create
    post = Post.new(post_params.merge(admin_id: session[:admin_id]))

    if post.save
      redirect_to "/"
    else
      render component: 'NewPostForm', props: {error: 'Must add both title and body to new post.'}
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :body)
  end
end