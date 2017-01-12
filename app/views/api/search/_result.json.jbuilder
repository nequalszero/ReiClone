# Product table details
result_attr = result.attributes
result_attr.each do |key, value|
  if key == "brand_id"
    json.set! "brand", Brand.find(value).name
  end
  json.set! key, value
end
