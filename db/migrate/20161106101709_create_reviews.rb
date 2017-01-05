class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.references :user, index: true, foreign_key: true
      t.references :product, index: true, foreign_key: true
      t.integer :rating, null: false
      t.string :title, null: false
      t.text :body, null: false
      t.index [:user_id, :product_id], unique: true

      t.timestamps null: false
    end
  end
end
