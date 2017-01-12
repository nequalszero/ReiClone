# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161109192727) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "brands", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "brands", ["name"], name: "index_brands_on_name", using: :btree

  create_table "categories", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "categories", ["name"], name: "index_categories_on_name", using: :btree

  create_table "details", force: :cascade do |t|
    t.integer  "product_id"
    t.text     "description", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "details", ["product_id"], name: "index_details_on_product_id", using: :btree

  create_table "features", force: :cascade do |t|
    t.string   "name",       null: false
    t.integer  "product_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "features", ["product_id"], name: "index_features_on_product_id", using: :btree

  create_table "products", force: :cascade do |t|
    t.integer  "category_id"
    t.integer  "product_table_id",               null: false
    t.integer  "brand_id"
    t.string   "name",                           null: false
    t.decimal  "price",                          null: false
    t.decimal  "rating",           default: 0.0, null: false
    t.integer  "num_ratings",      default: 0,   null: false
    t.string   "best_use"
    t.string   "full_size_image"
    t.string   "primary_image",                  null: false
    t.string   "result_image",                   null: false
    t.string   "cart_image",                     null: false
    t.text     "description",                    null: false
    t.text     "search_keywords",                null: false
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
  end

  add_index "products", ["brand_id"], name: "index_products_on_brand_id", using: :btree
  add_index "products", ["category_id", "product_table_id"], name: "index_products_on_category_id_and_product_table_id", unique: true, using: :btree

  create_table "reviews", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "product_id"
    t.integer  "rating",     null: false
    t.string   "title",      null: false
    t.text     "body",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "reviews", ["product_id"], name: "index_reviews_on_product_id", using: :btree
  add_index "reviews", ["user_id", "product_id"], name: "index_reviews_on_user_id_and_product_id", unique: true, using: :btree
  add_index "reviews", ["user_id"], name: "index_reviews_on_user_id", using: :btree

  create_table "shopping_cart_items", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "product_id", null: false
    t.integer  "quantity",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "shopping_cart_items", ["user_id", "product_id"], name: "index_shopping_cart_items_on_user_id_and_product_id", unique: true, using: :btree
  add_index "shopping_cart_items", ["user_id"], name: "index_shopping_cart_items_on_user_id", using: :btree

  create_table "sleeping_bags", force: :cascade do |t|
    t.decimal  "weight",             null: false
    t.integer  "temperature_rating", null: false
    t.string   "gender",             null: false
    t.decimal  "fits_up_to",         null: false
    t.string   "insulation_type",    null: false
    t.string   "bag_shape",          null: false
    t.string   "zipper_location",    null: false
    t.integer  "fill_power"
    t.decimal  "fill_weight"
    t.string   "fill"
    t.string   "color"
    t.decimal  "packed_size"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  create_table "tents", force: :cascade do |t|
    t.string   "seasons",                    null: false
    t.string   "sleeping_capacity",          null: false
    t.decimal  "minimum_trail_weight",       null: false
    t.decimal  "fly_footprint_pitch_weight"
    t.decimal  "packaged_weight"
    t.string   "packed_size"
    t.string   "floor_dimensions"
    t.decimal  "floor_area",                 null: false
    t.string   "vestibule_area"
    t.integer  "peak_height",                null: false
    t.integer  "number_of_doors",            null: false
    t.string   "number_of_poles"
    t.string   "pole_material"
    t.string   "pole_diameter"
    t.string   "canopy_fabric"
    t.string   "floor_fabric"
    t.string   "rainfly_fabric"
    t.string   "footprint_included"
    t.string   "ultralight"
    t.string   "design_type",                null: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree

  add_foreign_key "details", "products"
  add_foreign_key "features", "products"
  add_foreign_key "products", "brands"
  add_foreign_key "products", "categories"
  add_foreign_key "reviews", "products"
  add_foreign_key "reviews", "users"
  add_foreign_key "shopping_cart_items", "products"
  add_foreign_key "shopping_cart_items", "users"
end
