class AddAvailableToOnlineClasses < ActiveRecord::Migration[6.1]
  def change
    add_column :online_classes, :available, :boolean
  end
end
