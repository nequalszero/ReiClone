class Tent < ActiveRecord::Base
  validates :sleeping_capacity, :seasons, :minimum_trail_weight, :number_of_doors,
            :floor_area, :peak_height, :design_type, presence: true
end
