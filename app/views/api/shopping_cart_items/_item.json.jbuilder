product_info = Product.find_product_info(shopping_cart_item.product_id)

json.id shopping_cart_item.id
if shopping_cart_item.user_id
  json.user_id shopping_cart_item.user_id
end
json.product_id shopping_cart_item.product_id
json.quantity shopping_cart_item.quantity

json.category_id product_info.category_id
json.product_table_id product_info.product_table_id
json.brand product_info.brand.name
json.name product_info.name
json.price product_info.price
json.cart_image product_info.cart_image
