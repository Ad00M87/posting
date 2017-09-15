class Api::StormPostsController < ApplicationController
  def index
    render json: StromPost.all
  end

  def create
    attrs = params.permit(:title, :body, :img)
    post = StormPost.new(attrs)

    if post.save
      render json: {
        id: post.id,
        title: post.title,
        img_url: post.img.url
      }
    else
      render json: { errors: post.errors.full_messages }, status: 422
    end
  end

  def destroy
    StormPost.find(params[:id]).destroy
  end
end
