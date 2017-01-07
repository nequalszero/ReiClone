class Category < ActiveRecord::Base
  validates :name, uniqueness: true
  has_many :products, dependent: :destroy

  has_many :brands, through: :products

  def self.find_category_name(category_id)
    Category.find(category_id)
  end

  def self.find_products(category_name)
    Category.includes(:products).includes(:brands).find_by_name(category_name)
  end

  def self.find_product_specs(category_name)
    items = Category.includes(:products).includes(:brands).find_by_name(category_name)

    return nil if items.nil?

    if category_name == "sleeping_bags"
      target_table = SleepingBag
    elsif category_name == "tents"
      target_table = Tent
    end

    results = {}

    items.products.each do |item|
      results[item.id] = target_table.find(item.product_table_id)
    end

    results
  end
end
