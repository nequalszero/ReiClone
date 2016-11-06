class CreateSleepingBags < ActiveRecord::Migration
  def change
    create_table :sleeping_bags do |t|
      t.decimal :weight, null: false
      t.integer :temperature_rating, null: false
      t.string :gender, null: false
      t.decimal :fits_up_to, null: false
      t.string :insulation_type, null: false
      t.string :bag_shape, null: false
      t.string :zipper_location, null: false
      t.integer :fill_power
      t.string :color

      t.timestamps null: false
    end
  end
end
