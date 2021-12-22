class RemoveNotesFromScales < ActiveRecord::Migration[6.1]
  def change
    remove_column :scales, :notes, :string
  end
end
