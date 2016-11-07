class CreateTents < ActiveRecord::Migration
  def change
    create_table :tents do |t|
      t.string :sleeping_capacity, null: false
      t.string :seasons, null: false
      t.decimal :weight, null: false
      t.integer :number_of_doors, null: false
      t.decimal :floor_area, null: false
      t.integer :peak_height, null: false
      t.string :design_type, null: false
      
      t.timestamps null: false
    end
  end
end
