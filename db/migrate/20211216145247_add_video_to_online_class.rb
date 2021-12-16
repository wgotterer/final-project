class AddVideoToOnlineClass < ActiveRecord::Migration[6.1]
  def change
    add_column :online_classes, :video, :string
  end
end
