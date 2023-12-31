class CreateThemes < ActiveRecord::Migration[6.1]
  def change
    create_table :themes do |t|
      t.string :title, null: false

      t.timestamps
    end
    add_index :themes, [:title], unique: true
  end
end
