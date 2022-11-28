Message.destroy_all
Chatroom.destroy_all
User.destroy_all

chatroom = Chatroom.create(name: "general")
scooter = User.create(email: "mail@mail.com", nickname: "Scooter", password: "123123")
boris = User.create(email: "mail@mail.org", nickname: "Boris", password: "123123")

Message.create(content: "Hello", user: scooter, chatroom: chatroom)
Message.create(content: "Hola", user: boris, chatroom: chatroom)
