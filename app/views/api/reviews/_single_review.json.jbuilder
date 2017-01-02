review_attr = review.attributes
review_attr.each do |key, value|
  json.set! key, value
end
