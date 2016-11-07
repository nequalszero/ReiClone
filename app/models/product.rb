class Product < ActiveRecord::Base
  has_many :reviews
  has_many :features
  has_many :details

  validates :product_table_id, :category_id, :brand_id, :name, :price, :rating,
            :num_ratings, :description, :primary_image, :result_image, presence: true

  # def self.find_by_category(category_name)
  #   category = Category.find_by_name(category_name)
  #
  #   if category
  #     return 
  # end
end
