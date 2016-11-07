class Tent < ActiveRecord::Base
  validates :sleeping_capacity, :seasons, :weight, :number_of_doors,
            :floor_area, :peak_height, :design_type, presence: true
end
