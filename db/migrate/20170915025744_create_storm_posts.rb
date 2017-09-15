class CreateStormPosts < ActiveRecord::Migration[5.1]
  def change
    create_table :storm_posts do |t|
      t.string :title
      t.string :body

      t.timestamps
    end
  end
end
