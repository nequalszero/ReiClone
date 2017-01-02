class Api::ReviewsController < ApplicationController
  def show
    # default_limit = 10
    # default_offset = 0
    # limit = params[:review][:product_id] ? params[:review][:limit].to_i
    #                                      : default_limit
    # offset = params[:review][:product_id] ? params[:review][:offset].to_i
    #                                       : default_offset

    # product_id is passed through api/reviews/id as the id
    @reviews = Review.where( product_id: params[:id] )
                    #  .order(updated_at: :desc)
                    #  .offset(offset)
                    #  .limit(limit)
    user_review = @reviews.select { |rev| rev.user_id == current_user.id }
    @user_review = user_review.empty? ? nil : user_review.first
    render "api/reviews/show"
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
      render "api/reviews/review"
    else
      render json: { errors: ["Current user does not match review creator"] }, status: 401
    end
  end

  def update
    if current_user

      @review = Review.find(params[:id])

      if current_user.reviews.include?(@review)
        if @review.update(review_params)
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
    params.require(:review).permit(:rating, :title, :body, :product_id)
  end
end
