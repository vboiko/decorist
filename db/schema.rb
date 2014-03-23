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

ActiveRecord::Schema.define(version: 20140323145351) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "list_items", force: true do |t|
    t.integer  "product_id"
    t.integer  "cart_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "list_items", ["cart_id"], name: "index_list_items_on_cart_id", using: :btree
  add_index "list_items", ["product_id"], name: "index_list_items_on_product_id", using: :btree

  create_table "products", force: true do |t|
    t.string   "title"
    t.string   "image_url"
    t.decimal  "price"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
