class Api::V1::PostsController < ApplicationController

    def index
      all_posts = Post.all
      render json: all_posts
    end

    def create
      post = Post.create(post_params)
      if post.save
        render json: post
      else
        render json: { error: post.errors.full_messages }, status: 422
        end
    end

    def show
      post = Post.find(params[:id])
      render json: post
    end

    def update
      post = Post.find(params[:id])
      post.update(post_params)
      render json: post
    end

    def destroy
      Post.destroy(params[:id])
      head :ok
    end

    private

    def post_params
      params.permit(:title, :description)
    end
end
