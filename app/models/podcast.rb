# == Schema Information
#
# Table name: podcasts
#
#  id           :bigint           not null, primary key
#  podcast_name :string           not null
#  user_id      :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Podcast < ApplicationRecord
    validates :podcast_name, presence: true
    validates :user_id, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    has_one_attached :podcast_art

    has_many :episodes,
        foreign_key: :podcast_id,
        class_name: :Episode
end
