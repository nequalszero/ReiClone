class Product < ActiveRecord::Base
  has_many :reviews
  has_many :features
  has_many :details
  has_many :shopping_cart_items;
  belongs_to :brand
  belongs_to :category

  validates :product_table_id, :category_id, :brand_id, :name, :price, :rating,
            :num_ratings, :description, :primary_image, :result_image, presence: true

  def self.find_category_results(category_name)
    category = Category.find_by_name(category_name)

    if category
      category_id = category.id
      return Product.includes(:brand).where(category_id: category_id)
    end
  end

  def self.find_product_info(item_id)
    Product.includes(:brand).includes(:details).find(item_id)
  end

  def self.find_product_specs(category_id, product_table_id)
    category = Category.find(category_id)

    return nil unless ["sleeping_bags", "tents"].include?(category.name)

    if category.name == "sleeping_bags"
      specs = SleepingBag.find(product_table_id)
    elsif category.name == "tents"
      specs = Tent.find(product_table_id)
    end

    specs
  end
end
