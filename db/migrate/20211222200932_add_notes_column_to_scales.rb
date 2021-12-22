class AddNotesColumnToScales < ActiveRecord::Migration[6.1]
  def change
    add_column :scales, :notes, :integer
  end
end
