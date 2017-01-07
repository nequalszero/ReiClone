class Product < ActiveRecord::Base
  has_many :reviews, dependent: :destroy
  has_many :features, dependent: :destroy
  has_many :details, dependent: :destroy
  has_many :shopping_cart_items, dependent: :destroy
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

  def self.add_rating(product, rating)
    old_rating, num_ratings = product.rating, product.num_ratings

    new_rating = ((old_rating * num_ratings) + rating) / (num_ratings+=1)
    new_rating = new_rating.round(1)

    product.update_attribute :rating, new_rating
    product.update_attribute :num_ratings, num_ratings
  end

  def self.delete_rating(product, rating)
    old_rating, num_ratings = product.rating, product.num_ratings

    if num_ratings == 1
      new_rating = 0
      num_ratings -= 1
    else
      new_rating = ((old_rating * num_ratings) - rating) / (num_ratings-=1)
      new_rating = new_rating.round(1)
    end

    product.update_attribute :rating, new_rating
    product.update_attribute :num_ratings, num_ratings
  end

  def self.update_rating(product, rating_diff)
    old_rating, num_ratings = product.rating, product.num_ratings

    new_rating = ((old_rating * num_ratings) + rating_diff) / num_ratings
    new_rating = new_rating.round(1)

    product.update_attribute :rating, new_rating
  end
end
