class CreatePodcasts < ActiveRecord::Migration[5.2]
  def change
    create_table :podcasts do |t|
      t.string :podcast_name, null: false
      t.integer :user_id, null: false 
      t.timestamps
    end

    add_index :podcasts, :podcast_name
  end
end
