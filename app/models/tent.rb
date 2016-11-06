class Tent < ActiveRecord::Base
  validates :sleeping_capacity, :seasons, :weight, :number_of_doors,
            presence: true
end
