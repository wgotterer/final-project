class AddNotes2ToScales < ActiveRecord::Migration[6.1]
  def change
    add_column :scales, :notes, :string
  end
end
