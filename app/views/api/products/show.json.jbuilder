json.array! @results.products do |result|
  result_details = @result_details[result.id]
  json.partial! "api/products/item", {result: result, result_details: result_details}
end
