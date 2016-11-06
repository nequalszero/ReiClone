class AddPresenceConstraintsToTents < ActiveRecord::Migration
  def change
    change_column :tents, :sleeping_capacity, :string, null: false
    change_column :tents, :seasons, :string, null: false
    change_column :tents, :weight, :string, null: false
    change_column :tents, :number_of_doors, :string, null: false
  end
end
