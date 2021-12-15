class CreateUserOnlineClasses < ActiveRecord::Migration[6.1]
  def change
    create_table :user_online_classes do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :online_class, null: false, foreign_key: true

      t.timestamps
    end
  end
end
