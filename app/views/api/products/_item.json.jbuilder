# Product table details
result_attr = result.attributes
result_attr.each do |key, value|
  if key == "brand_id"
    json.set! "brand", Brand.find(value).name
  end
  json.set! key, value
end

# Specific table details
result_details_attr = result_details.attributes
result_details_attr.each do |key, value|
  next if key == "id" # avoid overriding the product id with the specific table id
  json.set! key, value
end
