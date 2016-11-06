class Detail < ActiveRecord::Base
  belongs_to :product

  validates :description, :product_id, presence: true
end
