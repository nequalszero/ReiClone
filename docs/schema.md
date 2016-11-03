# Schema Information

## users
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
username         | string    | not null, indexed, unique
password_digest  | string    | not null
session_token    | string    | not null, indexed, unique
shopping_cart_id | integer   | not null, indexed, unique, foreign key

## shopping_carts
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key

## shopping_cart_items
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
cart_id            | integer   | not null, indexed, foreign key
item_id            | integer   | not null, indexed, foreign key
quantity           | integer   | not null

## items
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
category           | string    | not null, foreign key
category_id        | integer   | not null, foreign key

## sleeping_bags
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, indexed, primary key
brand              | string    | not null
features           | string    | not null
price              | decimal   | not null
best_use           | string    | not null
num_ratings        | integer   | not null, default: 0
rating             | decimal   | not null, default: 0
color              | string    | not null
weight             | decimal   | not null
temperature_rating | integer   | not null
gender             | string    | not null
fits_up_to         | string    | not null
insulation_type    | string    | not null
bag_shape          | string    | not null
zipper_location    | string    | not null
fill_power         | integer   |

## reviews
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
customer_id      | string    | not null, indexed, foreign key
product_id       | string    | not null, indexed, foreign key
rating           | integer   | not null
title            | string    | not null
body             | string    | not null
