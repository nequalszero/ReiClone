# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
fname           | string    | not null, indexed
lname           | string    | not null, indexed
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## shopping_carts
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
customer_id        | integer   | not null, foreign key (references customer), indexed
updated_at         | datetime  | not null
items              | string    |

## sleeping_bags
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, indexed, primary key
category           | string    | not null
temperature_rating | integer   | not null
brand              | string    | not null
features           | string    | not null
gender             | string    | not null
best_use           | string    | not null
fits_up_to         | string    | not null
insulation_type    | string    | not null
bag_shape          | string    | not null
weight             | decimal   | not null
price              | decimal   | not null
zipper_location    | string    | not null
fill_power         | integer   |
color              | string    | not null
num_ratings        | integer   | not null, default: 0
rating             | decimal   | not null, default: 0
