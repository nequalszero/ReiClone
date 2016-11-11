class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.references :category, foreign_key: true
      t.integer :product_table_id, null: false
      t.references :brand, index: true, foreign_key: true
      t.string :name, null: false
      t.decimal :price, null: false
      t.decimal :rating, null: false, default: 0
      t.integer :num_ratings, null: false, default: 0
      t.string :best_use
      t.string :primary_image, null: false
      t.string :result_image, null: false
      t.string :cart_image, null: false
      t.text :description, null: false

      t.index [:category_id, :product_table_id], unique: true
      t.timestamps null: false
    end

  end
end
