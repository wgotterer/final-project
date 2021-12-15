class AddDecriptionToOnlineClass < ActiveRecord::Migration[6.1]
  def change
    add_column :online_classes, :description, :string
  end
end
