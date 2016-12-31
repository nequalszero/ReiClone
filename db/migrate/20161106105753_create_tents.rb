class CreateTents < ActiveRecord::Migration
  def change
    create_table :tents do |t|
      t.string :seasons, null: false
      t.string :sleeping_capacity, null: false
      t.decimal :minimum_trail_weight, null: false
      t.decimal :fly_footprint_pitch_weight
      t.decimal :packaged_weight
      t.string :packed_size
      t.string :floor_dimensions
      t.decimal :floor_area, null: false
      t.string :vestibule_area
      t.integer :peak_height, null: false
      t.integer :number_of_doors, null: false
      t.string :number_of_poles
      t.string :pole_material
      t.string :pole_diameter
      t.string :canopy_fabric
      t.string :floor_fabric
      t.string :rainfly_fabric
      t.string :footprint_included
      t.string :ultralight
      t.string :design_type, null: false

      t.timestamps null: false
    end
  end
end
