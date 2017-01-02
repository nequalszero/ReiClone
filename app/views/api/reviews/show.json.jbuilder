json.reviews do
  json.array! @reviews do |review|
    json.partial! "api/reviews/single_review", {review: review}
  end
end

if @user_review
  json.partial! "api/reviews/user_review", {review: @user_review}
end
