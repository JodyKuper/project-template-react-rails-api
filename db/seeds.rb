# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Game.delete_all
# TheTable.delete_all

n1 = User.create(username: "Joel", password: "123")
n2 = User.create(username: "Johnny",password: "123")
n3 = User.create(username: "Wade",password: "123")
n4 = User.create(username: "Eli",password: "123")



Game.create(name: "Splendor", rating: 8, user_id: n3.id) 
Game.create(name: "Catan", rating: 5, user_id: n1.id)
 Game.create(name: "GloomHaven", rating: 10, user_id: n4.id)
 Game.create(name: "Ticket to Ride", rating: 8, user_id: n1.id)


puts "Seeded"

