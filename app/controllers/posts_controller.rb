class PostsController < ApplicationController
  def new
    render component: 'NewPostForm'
  end

  def create
    post = Post.new(post_params.merge(admin_id: session[:admin_id]))

    if post.save
      redirect_to "/"
    else
      #flash[:error] = "Invalid input: must include both title and content."
      redirect_to "/"
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :body)
  end
end