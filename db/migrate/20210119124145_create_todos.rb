class CreateTodos < ActiveRecord::Migration[6.0]
  def change
    create_table :todos do |t|
      t.string :sentence
      t.references :calender, foregin_key: true
      t.timestamps
    end
  end
end
