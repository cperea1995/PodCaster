# == Schema Information
#
# Table name: episodes
#
#  id           :bigint           not null, primary key
#  episode_name :string           not null
#  podcast_id   :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Episode < ApplicationRecord
end
