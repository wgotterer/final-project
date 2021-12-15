# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




Scale.destroy_all
Scale.reset_pk_sequence 
TheoryGame.destroy_all
TheoryGame.reset_pk_sequence 
User.destroy_all
User.reset_pk_sequence 
UserTheoryGame.destroy_all
UserTheoryGame.reset_pk_sequence 
PrivateClass.destroy_all
PrivateClass.reset_pk_sequence 
OnlineClass.destroy_all
OnlineClass.reset_pk_sequence 
UserOnlineClass.destroy_all
UserOnlineClass.reset_pk_sequence 






donald = User.create(username:"donald", name:"donald", password_digest:"donald", email:"donald@gmail.com", admin:"no")
bugs = User.create(username:"bugs", name:"bugs", password_digest:"bugs", email:"bugs@gmail.com", admin:"no")
mickey = User.create(username:"mickey", name:"mickey", password_digest:"mickey", email:"mickey@gmail.com", admin:"no")

game1 = TheoryGame.create(name:"major scales", difficulty:"easy")
game2 = TheoryGame.create(name:"minor scales", difficulty:"easy")

Scale.create(notes: "c,d,e,f,g,a,b", name: "C major", theory_game_id:game1.id)
Scale.create(notes: "a,b,c,d,e,f,g", name: "A minor", theory_game_id:game2.id)
Scale.create(notes: "d, e, f#, g, a, b, c#", name: "C major", theory_game_id:game1.id)



UserTheoryGame.create(user_id:donald.id, theory_game_id:game1.id)
UserTheoryGame.create(user_id:bugs.id, theory_game_id:game2.id)




PrivateClass.create(goal:"get better", date:"2021-10-10", user_id:donald.id)
PrivateClass.create(goal:"play", date:"2021-05-05", user_id:bugs.id)
PrivateClass.create(goal:"learn", date:"2022-02-02", user_id:donald.id)
PrivateClass.create(goal:"learn that song", date:"2022-02-10", user_id:donald.id)

onlineClass1 = OnlineClass.create(name:"Learn Happy B Day", description:"note for note walkthrough", price:"1.99", difficulty:"easy" )
onlineClass2 = OnlineClass.create(name:"blues scale", description:"how to improvise", price:"2.99", difficulty:"intermediate" )
onlineClass3 = OnlineClass.create(name:"anomolie chords", description:"chord walkthrough", price:"3.99", difficulty:"advanced" )

UserOnlineClass.create(user_id: donald.id, online_class_id: onlineClass1.id)
UserOnlineClass.create(user_id: donald.id, online_class_id: onlineClass2.id)
UserOnlineClass.create(user_id: bugs.id, online_class_id: onlineClass2.id)
UserOnlineClass.create(user_id: bugs.id, online_class_id: onlineClass3.id)

