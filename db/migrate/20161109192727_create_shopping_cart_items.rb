class CreateShoppingCartItems < ActiveRecord::Migration
  def change
    create_table :shopping_cart_items do |t|
      t.references :shopping_cart, index: true, foreign_key: true, null: false
      t.references :product, foreign_key: true, null: false
      t.integer :quantity, null: false

      t.timestamps null: false
    end
  end
end
