class SleepingBag < ActiveRecord::Base
  validates :weight, :temperature_rating, :gender, :fits_up_to, :bag_shape,
            :zipper_location, :insulation_type, :packed_size, presence: true
end
