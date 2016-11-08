class Api::CategoriesController < ApplicationController
  def index
    @categories = Category.all
    render "api/categories/index"
  end

  def show
    category_name = Category.find_category_name(params[:id]).name
    @results = Category.find_products(category_name)
    @result_details = Category.find_product_specs(category_name)

    if @results
      render "api/products/show"
    else
      render json: @results.errors.full_messages
    end
  end

end
