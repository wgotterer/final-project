class CreateUserTheoryGames < ActiveRecord::Migration[6.1]
  def change
    create_table :user_theory_games do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :theory_game, null: false, foreign_key: true

      t.timestamps
    end
  end
end
