class CreateScales < ActiveRecord::Migration[6.1]
  def change
    create_table :scales do |t|
      t.string :notes
      t.string :name
      t.belongs_to :theory_game, null: false, foreign_key: true

      t.timestamps
    end
  end
end
