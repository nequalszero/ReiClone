json.partial! "api/products/item", {result: @result, result_details: @result_details}
json.details @result.details do |detail|
  json.detailId detail.id
  json.description detail.description
end
