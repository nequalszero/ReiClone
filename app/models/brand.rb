class Brand < ActiveRecord::Base
  validates :name, uniqueness: true
  has_many :products, dependent: :destroy

  def self.find_products(brand_name)
    Brand.includes(:products).find_by_name(brand_name)
  end
end
