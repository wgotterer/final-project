class CreateOnlineClasses < ActiveRecord::Migration[6.1]
  def change
    create_table :online_classes do |t|
      t.string :name
      t.string :difficulty
      t.float :price
      t.string :despription

      t.timestamps
    end
  end
end
