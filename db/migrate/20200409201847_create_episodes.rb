class CreateEpisodes < ActiveRecord::Migration[5.2]
  def change
    create_table :episodes do |t|
      t.string :episode_name, null: false
      t.integer :podcast_id, null: false
      t.timestamps
    end

    add_index :episodes, :episode_name
  end
end
