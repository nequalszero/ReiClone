json.array! @shopping_cart_items do |shopping_cart_item|
  options = {shopping_cart_item: shopping_cart_item,
             redirect_create: @redirect_create,
             local: @local_item}
  json.partial! "api/shopping_cart_items/item", options
end
