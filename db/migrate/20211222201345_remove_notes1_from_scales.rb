class RemoveNotes1FromScales < ActiveRecord::Migration[6.1]
  def change
    remove_column :scales, :notes, :integer
  end
end
