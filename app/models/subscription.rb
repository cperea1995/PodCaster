# == Schema Information
#
# Table name: subscriptions
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  podcast_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Subscription < ApplicationRecord
end
