# did not end up using, implemented in show_single_item.json.jbuilder

json.array! result.details.each do |detail|
    json.detailId detail.id
    json.description detail.description
end
