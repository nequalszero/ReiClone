class Api::ProductsController < ApplicationController
  def show
    @result = Product.find_product_info(params[:id])

    if @result
      category_id = @result.category_id
      product_table_id = @result.product_table_id
      @result_details = Product.find_product_specs(category_id, product_table_id)
      if @result_details
        render 'api/products/show_single_item'
      else
        render @result_details.errors.full_messages
      end
    else
      render json: @result.errors.full_messages
    end
  end
end
