class CreatePrivateClasses < ActiveRecord::Migration[6.1]
  def change
    create_table :private_classes do |t|
      t.string :goal
      t.datetime :date
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
