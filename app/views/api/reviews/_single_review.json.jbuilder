# require_relative "elapsed_time"

# Moved compute function into this file due bizarre rounding errors
def compute(seconds)
  minutes = (seconds / 60).round
  return (minutes < 3 ? "moments ago" : "#{minutes} minutes ago") if minutes <= 45

  hours = (seconds / 3600).round
  return "#{hours} #{hours == 1 ? "hour" : "hours"} ago" if hours < 20

  days = (seconds / 3600 / 24).round
  return "#{days} #{days == 1 ? "day" : "days"} ago" if days < 30

  months = (seconds / 3600 / 24 / 30).round
  return "#{months} #{months == 1 ? "month" : "months"} ago" if months < 12

  years = (seconds / 3600 / 24 / 30 / 12).round
  return "#{years} #{years == 1 ? "year" : "years"} ago"
end

review_attr = review.attributes
review_attr.each do |key, value|
  if key == "created_at" || key == "updated_at"
    seconds = (DateTime.now.to_i - value.to_i)
    json.set! key, seconds
    json.set! "#{key}_string", compute(seconds.to_f)
  else
    json.set! key, value
  end
end

json.user review.user.username
