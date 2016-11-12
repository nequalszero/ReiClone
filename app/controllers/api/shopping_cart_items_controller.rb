class Api::ShoppingCartItemsController < ApplicationController
  def index
    if current_user
      user_id = current_user.id

      @shopping_cart_items = ShoppingCartItem.find_by_user_id(user_id)
      render "api/shopping_cart_items/show_items"
    else
      error = "ShoppingCartItemsController - index - No user logged in."
      render json: {errors: [error]}, status: 404
    end
  end

  def show
    @shopping_cart_item = ShoppingCartItem.find(params[:id])
    render "api/shopping_cart_items/show_item"
  end

  def create
    if current_user
      @shopping_cart_item = ShoppingCartItem.new(shopping_cart_item_params)
      @shopping_cart_item.user_id = current_user.id

      if @shopping_cart_item.save
        render "api/shopping_cart_items/show_item"
      else
        render json: @shopping_cart_item.errors.full_messages, status: 422
      end
    else
      error = "ShoppingCartItemsController - create - no user logged in"
      render json: {errors: []}, status: 422
    end
  end

  def update
    if current_user
      @shopping_cart_item = ShoppingCartItem.find(params[:id])

      if @shopping_cart_item.update(shopping_cart_item_params)
        render "api/shopping_cart_items/show_item"
      else
        render json: @shopping_cart_item.errors.full_messages, status: 422
      end
    else
      error = "ShoppingCartItemsController - update - no current user"
      render json: {errors: [error]}, status: 422
    end
  end

  def destroy
    @shopping_cart_item = ShoppingCartItem.find(params[:id])
    if @shopping_cart_item
      @shopping_cart_item.delete
      success = "Successfully deleted #{current_user.username}'s items from database"
      render json: [success]
    else
      render json: @shopping_cart_item.errors.full_messages, status: 422
    end
  end

  private
  def shopping_cart_item_params
    params.permit(:product_id, :quantity)
  end
end
