class Review < ActiveRecord::Base
  belongs_to :user
  belongs_to :product

  validates :user_id, :product_id, :rating, :title, :body, presence: true
end
