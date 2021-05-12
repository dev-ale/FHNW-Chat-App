// Server file
const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();
const app = express()

//Import Routes
const authRoute = require('./routes/auth');
const dashboardRoute = require('./routes/dashboard');

//connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected to DB!')
);


//Middleware
app.use(express.json());
//Route Middleware
app.use('/api/user',authRoute);
app.use('/api/dashboard', dashboardRoute);



//All urls goto to index.html in /dist folder [build folder]
app.use("/", serveStatic(path.join(__dirname, '/dist')))

app.get(/.*/, function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
})

const port = process.env.PORT || 5000;

const SocketIO = require("socket.io")

const server= app.listen(port, () => {
    console.log(`socket Listening on port 5000`);
  }); 
  
  var io = SocketIO(server)

var rooms = ['English', 'Java', 'WebEngineering'];
var room_users = {
  English: [],
  Java: [],
  WebEngineering: [],
};
var room_messages = {
  English: [],
  Java: [],
  WebEngineering: [],
};

var index = 0;

io.on("connection", (socket) => {
    console.log("socket.io running")
  //Join to Roomchat
  socket.on("joinRoom", ({ username, room }) => {
    socket.room = room;
    socket.username = username;

    //room_users[socket.room].push(username);

    socket.join(socket.room);

    console.log(`${socket.username} has connected to room ${socket.room}`);

    io.to(socket.room).emit("userOnline", socket.username);

    //Welcome User in Chat
    socket.to(socket.room).emit("chat_update", {
      username: socket.username,
      message: `Wilkommen im Chat ${socket.room}`,
    });

    //Passing Data from Database
   /*  io.to(socket.room).emit("db_data", {
      users: room_users[socket.room].map((s) => s.username),
      rooms,
      current_room: socket.room,
      messages: room_messages[socket.room],
    }); */

    //Update Users in the Chat that a new User is online
    socket.broadcast.to(socket.room).emit("update_newUser", {
      username: socket.username,
      message: `${socket.username} ist dem Chat beigetreten.`,
    });

    socket.on("message", (msg) => {
      let message = {
        index: index,
        username: socket.username,
        room: "rr",
        msg: msg,
        time: new Date().toLocaleTimeString(),
      };

      room_messages[socket.room].push(message);

      console.log(message);

      io.to(socket.room).emit("message", message);

      index++;
    });

    // User disconected
    socket.on("disconnect", () => {
      console.log(`${socket.username} hat den Chat verlassen.`);
      io.emit("userLeft", socket.username);
      //room_users[socket.room].splice(room_users[socket.room].indexOf(socket), 1);
    });
  });

  //Get rooms TBD
    
    socket.emit('allRooms', {
      rooms,
    });
  
 
});

