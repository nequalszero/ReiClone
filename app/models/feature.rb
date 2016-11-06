class Feature < ActiveRecord::Base
  belongs_to :product

  validates :product_id, :name, presence: true
end
