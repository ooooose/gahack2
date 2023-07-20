class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :uid, null: false
      t.string :name, null: false, limit: 40
      t.text :description, limit: 160
      t.string :avatar
      t.string :twitter_name

      t.timestamps
    end
    add_index :users, [:uid], unique: true
  end
end
