class AddAttachmentImgToStormPosts < ActiveRecord::Migration[5.1]
  def self.up
    change_table :storm_posts do |t|
      t.attachment :img
    end
  end

  def self.down
    remove_attachment :storm_posts, :img
  end
end
