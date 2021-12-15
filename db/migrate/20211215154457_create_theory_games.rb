class CreateTheoryGames < ActiveRecord::Migration[6.1]
  def change
    create_table :theory_games do |t|
      t.string :name
      t.string :difficulty

      t.timestamps
    end
  end
end
