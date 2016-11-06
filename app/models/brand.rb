class Brand < ActiveRecord::Base
  validates :name, uniqueness: true

  belongs_to :products
end
