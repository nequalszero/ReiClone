class Review < ActiveRecord::Base
  belongs_to :user
  belongs_to :product

  validates :user_id, :product_id, :rating, :title, :body, presence: true
  validates :user_id, uniqueness: {scope: :product_id}
end
