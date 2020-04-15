# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

demo = User.create!(email: 'demouser@demo.com', password: 'password', username: 'DEMO', dob: '19671017', gender: 'Female')
user1 = User.create!(email: 'user1@demo.com' , password: 'password' , username: 'user1' , dob: '20200411' , gender: 'Male')
user2 = User.create!(email: 'user2@demo.com' , password: 'password' , username: 'user2' , dob: '20200411' , gender: 'Male')
user3 = User.create!(email: 'user3@demo.com' , password: 'password' , username: 'user3' , dob: '20200411' , gender: 'Male')

podcast1 = Podcast.create!(podcast_name: 'This American Life' , user_id: user1.id)
podcast2 = Podcast.create!(podcast_name: 'Serial' , user_id: user3.id)
podcast3 = Podcast.create!(podcast_name: 'Radiolab' , user_id: user2.id)
podcast4 = Podcast.create!(podcast_name: 'The Daily' , user_id: user2.id)
podcast5 = Podcast.create!(podcast_name: '99% Invisible' , user_id: user1.id)
podcast6 = Podcast.create!(podcast_name: 'Criminal' , user_id: user3.id)
podcast7 = Podcast.create!(podcast_name: 'How I Built This' , user_id: user3.id)
podcast8 = Podcast.create!(podcast_name: 'Stuff You Should Know' , user_id: user2.id)
podcast9 = Podcast.create!(podcast_name: 'WTF with Marc Maron' , user_id: user1.id)
podcast10 = Podcast.create!(podcast_name: 'Planet Money' , user_id: user3.id)
podcast11 = Podcast.create!(podcast_name: 'Slow Burn' , user_id: user2.id)
podcast12 = Podcast.create!(podcast_name: 'S-Town' , user_id: user1.id)
podcast13 = Podcast.create!(podcast_name: 'My Favorite Murder' , user_id: user3.id)
podcast14 = Podcast.create!(podcast_name: 'Pod Save America' , user_id: user1.id)
podcast15 = Podcast.create!(podcast_name: 'Invisibilia' , user_id: user1.id)
podcast16 = Podcast.create!(podcast_name: 'Dr. Death' , user_id: user1.id)
podcast17 = Podcast.create!(podcast_name: 'How Did This Get Made?' , user_id: user1.id)
podcast18 = Podcast.create!(podcast_name: 'The Joe Rogan Experience' , user_id: user2.id)
podcast19 = Podcast.create!(podcast_name: 'Welcome to Night Vale' , user_id: user3.id)
podcast20 = Podcast.create!(podcast_name: 'In the Dark' , user_id: user3.id)
podcast21 = Podcast.create!(podcast_name: 'Terrible, Thanks for Asking' , user_id: user3.id)
podcast22 = Podcast.create!(podcast_name: 'Revisionist History' , user_id: user3.id)
podcast23 = Podcast.create!(podcast_name: 'The Joe Rogan Experience' , user_id: user3.id)
podcast24 = Podcast.create!(podcast_name: 'Conan OBrien Needs a Friend' , user_id: user2.id)
podcast25 = Podcast.create!(podcast_name: 'H3 Podcast' , user_id: user3.id)
podcast26 = Podcast.create!(podcast_name: 'The Vergecast' , user_id: user2.id)
podcast27 = Podcast.create!(podcast_name: 'ESPN Daily' , user_id: user1.id)
podcast28 = Podcast.create!(podcast_name: 'You Are Not So Smart' , user_id: user1.id)
podcast29 = Podcast.create!(podcast_name: 'Fresh Air' , user_id: user1.id)
podcast30 = Podcast.create!(podcast_name: 'Song Exploder' , user_id: user2.id)

podcast1.podcast_art.attach({io: imagefile1, filename: "MGasdfAD1", content_type: "image/jpeg" })