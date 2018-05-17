class PostsController < ApplicationController

  def index
    @posts = Post.limit(10).offset(params[:offset] || 1)
    respond_to do |format|
      format.html
      format.json { render json: @posts }
    end
  end

end
