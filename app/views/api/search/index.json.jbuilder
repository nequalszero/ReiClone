json.array! @results do |result|
  json.partial! "api/search/result", {result: result }
end
