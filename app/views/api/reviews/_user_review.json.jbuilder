if review.nil?
  json.user_review nil
else
  review_attr = review.attributes
  json.user_review do
    review_attr.each do |key, value|
      json.set! key, value
    end
  end
end
