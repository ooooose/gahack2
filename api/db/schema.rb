# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_07_29_213003) do

  create_table "comments", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "picture_id", null: false
    t.bigint "user_id", null: false
    t.text "body", size: :tiny, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["picture_id"], name: "index_comments_on_picture_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "likes", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "picture_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["picture_id"], name: "index_likes_on_picture_id"
    t.index ["user_id", "picture_id"], name: "index_likes_on_user_id_and_picture_id", unique: true
    t.index ["user_id"], name: "index_likes_on_user_id"
  end

  create_table "pictures", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "theme_id", null: false
    t.integer "frame_id", default: 0, null: false
    t.string "image", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["theme_id"], name: "index_pictures_on_theme_id"
    t.index ["user_id"], name: "index_pictures_on_user_id"
  end

  create_table "themes", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "title", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["title"], name: "index_themes_on_title", unique: true
  end

  create_table "users", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "uid", null: false
    t.string "name", limit: 40, null: false
    t.text "description", size: :tiny
    t.string "avatar"
    t.string "twitter_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["uid"], name: "index_users_on_uid", unique: true
  end

  add_foreign_key "comments", "pictures"
  add_foreign_key "comments", "users"
  add_foreign_key "likes", "pictures"
  add_foreign_key "likes", "users"
  add_foreign_key "pictures", "themes"
  add_foreign_key "pictures", "users"
end
