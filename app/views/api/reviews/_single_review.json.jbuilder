require_relative "elapsed_time"

review_attr = review.attributes
review_attr.each do |key, value|
  if key == "created_at" || key == "updated_at"
    seconds = (DateTime.now.to_i - value.to_i)
    json.set! key, seconds
    json.set! "#{key}_string", ElapsedTime.compute(seconds.to_f)
  else
    json.set! key, value
  end
end

json.user review.user.username
