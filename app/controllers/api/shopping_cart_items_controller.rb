class Api::ShoppingCartItemsController < ApplicationController
  def index
    if current_user
      user_id = current_user.id
      @redirect_create = false
      @shopping_cart_items = ShoppingCartItem.find_by_user_id(user_id)
      render "api/shopping_cart_items/show_items"
    else
      error = "ShoppingCartItemsController#index - No user logged in."
      render json: {errors: [error]}, status: 404
    end
  end

  def show
    @redirect_create = false
    @shopping_cart_item = ShoppingCartItem.find(params[:id])
    render "api/shopping_cart_items/show_item"
  end

  def create
    if current_user
      @shopping_cart_item = ShoppingCartItem.find_by_user_id_and_product_id(
        current_user.id,
        shopping_cart_item_params[:product_id]
      )

      if @shopping_cart_item
        params["id"] = @shopping_cart_item.id
        params["quantity"] = @shopping_cart_item.quantity.to_i +
                             shopping_cart_item_params["quantity"].to_i
        params[:redirect_create] = true
        return update
      end

      @shopping_cart_item = ShoppingCartItem.new(shopping_cart_item_params)
      @shopping_cart_item.user_id = current_user.id

      if @shopping_cart_item.save
        @local_item = true if params[:local]
        render "api/shopping_cart_items/show_item"
      else
        render json: @shopping_cart_item.errors.full_messages, status: 422
      end
    else
      error = "ShoppingCartItemsController#create - no user logged in"
      render json: {errors: []}, status: 422
    end
  end

  def update
    if current_user
      @shopping_cart_item = ShoppingCartItem.find(params[:id])

      if @shopping_cart_item.update(shopping_cart_item_params)
        @redirect_create, @local_item = false, false

        if params.has_key?(:redirect_create) || params.has_key?(:local)
          @redirect_create = true if params.has_key?(:redirect_create)
          @local_item = true if params.has_key?(:local)
        end
        render "api/shopping_cart_items/show_item"
      else
        render json: @shopping_cart_item.errors.full_messages, status: 422
      end
    else
      error = "ShoppingCartItemsController#update - no current user"
      render json: {errors: [error]}, status: 422
    end
  end

  def destroy
    @shopping_cart_item = ShoppingCartItem.find(params[:id])
    if @shopping_cart_item
      @shopping_cart_item.delete
      render "api/shopping_cart_items/show_item"
    else
      render json: @shopping_cart_item.errors.full_messages, status: 422
    end
  end

  private
  def shopping_cart_item_params
    params.permit(:user_id, :product_id, :quantity, :local)
  end
end
