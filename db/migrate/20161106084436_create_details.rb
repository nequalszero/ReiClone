class CreateDetails < ActiveRecord::Migration
  def change
    create_table :details do |t|
      t.references :product, index: true, foreign_key: true
      t.text :description, null: false

      t.timestamps null: false
    end
  end
end
