class RemoveColumnFromOnlineClass < ActiveRecord::Migration[6.1]
  def change
    remove_column :online_classes, :despription, :string
  end
end
