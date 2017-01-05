class ShoppingCartItem < ActiveRecord::Base
  belongs_to :user
  belongs_to :product

  validates :user_id, :product_id, :quantity, presence: true
  validates :user_id, uniqueness: {scope: :product_id}

  def self.find_by_user_id(user_id)
    ShoppingCartItem.where(user_id: user_id)
  end

end
