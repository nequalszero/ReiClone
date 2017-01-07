json.reviews do
  json.array! @reviews do |review|
    json.partial! "api/reviews/single_review", {review: review}
  end
end
