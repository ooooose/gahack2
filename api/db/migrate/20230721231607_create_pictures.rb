class CreatePictures < ActiveRecord::Migration[6.1]
  def change
    create_table :pictures do |t|
      t.references :user, null: false, foreign_key: true
      t.references :theme, null: false, foreign_key: true
      t.integer :frame_id, null: false, default: 0
      t.string :image, null: false

      t.timestamps
    end
  end
end
