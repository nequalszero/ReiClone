json.array! @shopping_cart_items do |shopping_cart_item|
  json.partial! "api/shopping_cart_items/item", {shopping_cart_item: shopping_cart_item, redirect_create: @redirect_create}
end
