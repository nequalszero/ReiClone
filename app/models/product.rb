class Product < ActiveRecord::Base
  has_many :reviews
  has_many :features
  has_many :details

  validates :product_table_id, :category_id, :brand_id, :name, :price, :ratings,
            :num_ratings, :description, presence: true
end
