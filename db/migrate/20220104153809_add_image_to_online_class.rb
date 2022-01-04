class AddImageToOnlineClass < ActiveRecord::Migration[6.1]
  def change
    add_column :online_classes, :image, :string
  end
end
