# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Game.delete_all
TheTable.delete_all

n1 = User.create(username: "Joel", password: "123")
n2 = User.create(username: "Johnny",password: "123")
n3 = User.create(username: "Wade",password: "123")
n4 = User.create(username: "Eli",password: "123")



g1 = Game.create(name: "Cataan")
g2 = Game.create(name: "Splendor")
g3 = Game.create(name: "GloomHaven")
g4 = Game.create(name: "Ticket to Ride")



TheTable.create(user_id: n1.id, game_id: g1.id)
TheTable.create(user_id: n2.id, game_id: g2.id)
TheTable.create(user_id: n2.id, game_id: g3.id)
TheTable.create(user_id: n3.id, game_id: g4.id)
TheTable.create(user_id: n4.id, game_id: g2.id)
TheTable.create(user_id: n3.id, game_id: g2.id)
TheTable.create(user_id: n4.id, game_id: g1.id)

puts "Seeded"
