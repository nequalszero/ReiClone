class CreateTents < ActiveRecord::Migration
  def change
    create_table :tents do |t|
      t.string :sleeping_capacity
      t.string :seasons
      t.decimal :weight
      t.integer :number_of_doors

      t.timestamps null: false
    end
  end
end
