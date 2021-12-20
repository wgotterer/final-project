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

ActiveRecord::Schema.define(version: 2021_12_17_170122) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "online_classes", force: :cascade do |t|
    t.string "name"
    t.string "difficulty"
    t.float "price"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "description"
    t.string "video"
    t.boolean "available"
  end

  create_table "private_classes", force: :cascade do |t|
    t.string "goal"
    t.datetime "date"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_private_classes_on_user_id"
  end

  create_table "scales", force: :cascade do |t|
    t.string "notes"
    t.string "name"
    t.bigint "theory_game_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["theory_game_id"], name: "index_scales_on_theory_game_id"
  end

  create_table "theory_games", force: :cascade do |t|
    t.string "name"
    t.string "difficulty"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "user_online_classes", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "online_class_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["online_class_id"], name: "index_user_online_classes_on_online_class_id"
    t.index ["user_id"], name: "index_user_online_classes_on_user_id"
  end

  create_table "user_theory_games", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "theory_game_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["theory_game_id"], name: "index_user_theory_games_on_theory_game_id"
    t.index ["user_id"], name: "index_user_theory_games_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "name"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "admin"
  end

  add_foreign_key "private_classes", "users"
  add_foreign_key "scales", "theory_games"
  add_foreign_key "user_online_classes", "online_classes"
  add_foreign_key "user_online_classes", "users"
  add_foreign_key "user_theory_games", "theory_games"
  add_foreign_key "user_theory_games", "users"
end
