class Api::ReviewsController < ApplicationController
  def index
    # default_limit = 10
    default_offset = 0
    # limit = params[:review][:limit] ? params[:review][:limit].to_i
    #                                 : default_limit
    offset = params[:review][:offset] ? params[:review][:offset].to_i
                                      : default_offset
    if review_params[:user_only] == "true"
      user_review = Review.where(product_id: params[:product_id], user_id: current_user.id)
      @user_review = user_review.empty? ? nil : user_review.first
      render "api/reviews/index_user_review"
    elsif review_params[:additional] == "true"
      @reviews = Review.where(product_id: params[:product_id])
                       .order(updated_at: :desc)
                       .offset(offset)
                       .limit(10)
      render "api/reviews/additional_reviews"
    else
      @reviews = Review.where(product_id: params[:product_id])
                       .order(updated_at: :desc)
                       .offset(offset)
                       .limit(10)
      user_review = current_user ? Review.where(user_id: current_user.id, product_id: params[:product_id]) : []
      @user_review = user_review.empty? ? nil : user_review.first
      render "api/reviews/index"
    end
  end

  def create
    if current_user

      if !(Review.where(product_id: review_params[:product_id], user_id: current_user.id).empty?)
        error = "ReviewsController#create - Duplicate review creation request"
        render json: { errors: [error] }, status: 422
      else
        @review = Review.new(review_params)
        @review.user_id = current_user.id

        if @review.save
          Product.add_rating(@review.product, @review.rating)
          render "api/reviews/review"
        else
          render json: {errors: @review.errors.full_messages }, status: 422
        end
      end
    else
      error = "ReviewsController#create - No user logged in."
      render json: { errors: [error] }, status: 404
    end
  end

  def destroy
    @review = Review.find(params[:id])

    if current_user.reviews.include?(@review)
      @review.delete
      Product.delete_rating(@review.product, @review.rating)
      render "api/reviews/review"
    else
      render json: { errors: ["Current user does not match review creator"] }, status: 401
    end
  end

  def update
    if current_user
      @review = Review.find(params[:id])

      if current_user.reviews.include?(@review)
        old_rating = @review.rating

        if @review.update(review_params)
          Product.update_rating(@review.product, @review.rating-old_rating) unless @review.rating == old_rating
          render "api/reviews/review"
        else
          render json: { errors: @review.errors.full_messages }, status: 422
        end
      else
        render json: { errors: ["Current user does not match review creator"] }, status: 401
      end

    else
      error = "ReviewsController#create - No user logged in."
      render json: { errors: [error] }, status: 404
    end
  end

  private

  def review_params
    params.require(:review).permit(:rating, :title, :body, :product_id, :user_only, :offset)
  end
end
