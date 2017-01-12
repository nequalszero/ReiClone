json.results @results do |result|
  json.partial! "api/search/result", {result: result }
end

json.keywords @keywords
