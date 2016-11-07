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
shopping_cart_id   | integer   | not null, indexed, foreign key
product_id         | integer   | not null, indexed, foreign key
quantity           | integer   | not null

## categories
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
category           | string    | not null

## brands
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
name               | string    | not null

## features
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
product_id         | integer   | not null, indexed, foreign key
name               | string    | not null

## products
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
category_id        | integer   | not null, indexed, foreign key
brand_id           | integer   | not null, indexed, foreign key
result_image       | string    | not null
primary_image      | string    | not null
name               | string    | not null
price              | decimal   | not null
rating             | decimal   | not null, default: 0
num_ratings        | integer   | not null, default: 0
best_use           | string    | not null
description        | text      | not null

## details
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
product_id         | integer   | not null, indexed, foreign key
description        | text      | not null

## reviews
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
user_id          | string    | not null, indexed, foreign key
product_id       | string    | not null, indexed, foreign key
rating           | integer   | not null
title            | string    | not null
body             | text      | not null

## sleeping_bags
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, indexed, primary key
color              | string    | not null
weight             | decimal   | not null
temperature_rating | integer   | not null
gender             | string    | not null
fits_up_to         | decimal   | not null
insulation_type    | string    | not null
bag_shape          | string    | not null
zipper_location    | string    | not null
fill_power         | integer   |
packed_size        | decimal   |


## tents
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, indexed, primary key
sleeping_capacity  | string    | not null
seasons            | string    | not null
weight             | decimal   | not null
number_of_doors    | integer   | not null
floor_area         | decimal   | not null
peak_height        | integer   | not null
design_type        | string    | not null



Retrieving category items from database:
user input: category

lookup category in categories table: gives back category_id
search products table for category_id: give back foreign_table_ids
search foreign_table for foreign_table ids
    foreign_table will be specified in controller based on user input
