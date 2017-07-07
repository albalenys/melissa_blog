class PostsController < ApplicationController
  def new
    #..
  end

  def create
    post = Post.new(post_params.merge(admin_id: session[:admin_id]))

    if post.save
      params[:tags].split(",").each do |tag_name|
        tag = Tag.find_or_create_by(name: tag_name)
        post.tags << tag
      end

      redirect_to "/posts/#{post.id}"
    else
      render :new, locals: {error: "Must add both title and body to new post."}
    end
  end

  def show
    @post = Post.find(params[:id])
  end

  private

  def post_params
    params.require(:post).permit(:title, :body)
  end
end