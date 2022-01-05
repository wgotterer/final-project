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





wilhelm = User.create(username:"wilhelm", name:"wilhelm", password:"wilhelm", email:"wilhelm@gmail.com", admin:"1")

donald = User.create(username:"donaldduck", name:"donald", password:"donald", email:"donald@gmail.com", admin:"0")
bugs = User.create(username:"bugs", name:"bugs", password:"bugs", email:"bugs@gmail.com", admin:"0")
mickey = User.create(username:"mickey", name:"mickey", password:"mickey", email:"mickey@gmail.com", admin:"0")

game1 = TheoryGame.create(name:"major scales", difficulty:"easy")
game2 = TheoryGame.create(name:"minor scales", difficulty:"easy")

Scale.create(notes: "65, 83, 68, 70, 71, 72, 74, 75", name: "C major", theory_game_id:game1.id)
Scale.create(notes: "65, 83, 82, 70, 71, 72, 73, 75", name: "D major", theory_game_id:game1.id)
Scale.create(notes: "65, 69, 82, 70, 72, 73, 79, 76", name: "E major", theory_game_id:game1.id)
Scale.create(notes: "65, 83, 68, 82, 72, 74, 75, 76", name: "F major", theory_game_id:game1.id)
Scale.create(notes: "65, 83, 68, 70, 72, 74, 79, 76", name: "G major", theory_game_id:game1.id)
Scale.create(notes: "65, 83, 82, 84, 71, 85, 73, 75", name: "A major", theory_game_id:game1.id)
Scale.create(notes: "65, 69, 82, 70, 89, 85, 73, 75", name: "B major", theory_game_id:game1.id)
Scale.create(notes: "65, 83, 69, 70, 71, 89, 85, 75", name: "C minor", theory_game_id:game1.id)
Scale.create(notes: "65, 83, 68, 70, 71, 89, 74, 75", name: "D minor", theory_game_id:game1.id)
Scale.create(notes: "65, 69, 68, 70, 72, 74, 75, 76", name: "E minor", theory_game_id:game1.id)
Scale.create(notes: "65, 83, 69, 82, 72, 85, 75, 76", name: "F minor", theory_game_id:game1.id)
Scale.create(notes: "65, 83, 69, 70, 72, 74, 79, 76", name: "G minor", theory_game_id:game1.id)
Scale.create(notes: "65, 83, 68, 70, 71, 72, 74, 75", name: "A minor", theory_game_id:game1.id)
Scale.create(notes: "65, 69, 68, 70, 89, 72, 74, 75", name: "B minor", theory_game_id:game1.id)



UserTheoryGame.create(user_id:donald.id, theory_game_id:game1.id)
UserTheoryGame.create(user_id:bugs.id, theory_game_id:game2.id)




PrivateClass.create(goal:"Practice my scales", date:"20220109190000", user_id:donald.id)
PrivateClass.create(goal:"Learn a new song", date:"20220123183000", user_id:bugs.id)
PrivateClass.create(goal:"Not get nervous and cry", date:"20220215230000", user_id:mickey.id)
PrivateClass.create(goal:"Impress Daisy Duck", date:"20220113130000", user_id:donald.id)

onlineClass1 = OnlineClass.create(name:"(Untitled) How Does it Feel - D'Angelo", description:"chord progression", price:"1.99", difficulty:"easy", video:"A1ovitsJ2Aw", available: true, image: "https://media.npr.org/assets/img/2020/01/23/d-angelo03_sq-0e9e25c04f6964ca2c18aacc08aefb41150a8210-s1100-c50.jpg"  )
onlineClass2 = OnlineClass.create(name:"Roses intro - Outkast", description:"Learn the intro lick for Roses!", price:"1.99", difficulty:"intermediate", video:"zYw9XNbSLxc", available: true, image: "https://img.discogs.com/yqdOk818C1WxJji5oYFoDXkRaLU=/fit-in/600x522/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-2444066-1455470393-7949.jpeg.jpg" )
onlineClass3 = OnlineClass.create(name:"Georgia on My Mind - Blues arrangement ", description:"note for note tutorial", price:"3.99", difficulty:"advanced", video:"CbZVv79JK4Q", available: true, image: "https://ih1.redbubble.net/image.849706282.1478/st,small,507x507-pad,600x600,f8f8f8.u6.jpg"  )
onlineClass4 = OnlineClass.create(name:"Earned It - The Weekend", description:"note for note tutorial", price:"1.00", difficulty:"intermediate", video:"8nXXMPyZNe0", available: true, image: "https://upload.wikimedia.org/wikipedia/en/3/38/The_Weeknd_-_Earned_It.png"  )
onlineClass5 = OnlineClass.create(name:"P.I.M.P - 50 Cent ", description:"note for note tutorial", price:"0.99", difficulty:"easy", video:"llLyqwbTmvs", available: true, image: "https://upload.wikimedia.org/wikipedia/en/9/9d/Get_Rich_Or_Die_Tryin%27.JPG"  )
onlineClass6 = OnlineClass.create(name:"Moon River", description:"note for note tutorial", price:"1.99", difficulty:"intermediate", video:"Nmyce4WTNKw", available: true, image: "https://images-na.ssl-images-amazon.com/images/I/916ajka4ALL.jpg"  )
onlineClass7 = OnlineClass.create(name:"Pony - Ginuwine", description:"melody tutorial with beats", price:"1.50", difficulty:"easy", video:"CEhq_K_2Wbo", available: true, image: "https://m.media-amazon.com/images/I/81exSBkrSEL._AC_SL1500_.jpg"  )
onlineClass8 = OnlineClass.create(name:"Happy Birthday", description:"note for note tutorial", price:"0.20", difficulty:"easy", video:"tetbFNnUWe0", available: true, image: "https://www.homemade-gifts-made-easy.com/image-files/birthday-wishes-for-friend-watercolor-balloons-800x800.png"  )
onlineClass9 = OnlineClass.create(name:"Best Part - Daniel Cesar", description:"note for note tutorial", price:"1.99", difficulty:"intermediate", video:"HFmomvrU8Ws", available: true, image: "https://images.genius.com/cb3aa21d3bdc100d2ba5700d3a566fb9.1000x1000x1.jpg"  )

UserOnlineClass.create(user_id: donald.id, online_class_id: onlineClass1.id)
UserOnlineClass.create(user_id: donald.id, online_class_id: onlineClass2.id)
UserOnlineClass.create(user_id: bugs.id, online_class_id: onlineClass2.id)
UserOnlineClass.create(user_id: bugs.id, online_class_id: onlineClass3.id)

