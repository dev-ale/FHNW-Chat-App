// Server file
const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const MessagesModel = require('./model/Messages')
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

const SocketIO = require("socket.io");

const server= app.listen(port, () => {
    console.log(`socket Listening on port 5000`);
  }); 
  
var io = SocketIO(server)


var messages = []

// Get MongoDB Data
 MessagesModel.find((err, result) => {
  if(err) throw err;
   messages = result
}); 

io.on("connection", (socket) => {
  //Join to Roomchat
  socket.on("joinRoom", ({ username, room }) => {
    socket.room = room;
    socket.username = username;
    console.log(socket.room)
    
    socket.join(socket.room);

    console.log(`${socket.username} has connected to room ${socket.room}`);
    io.to(socket.room).emit("userOnline", socket.username);
 

    //Passing Data from Database
    io.to(socket.room).emit("db_data", {
      messages: messages,
    }); 

   

    socket.on("message", (msg) => {
      let today = new Date()
      let message = new MessagesModel({
        username: socket.username,
        msg: msg,
        roomId: socket.room,
        date: today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear()+': '+today.toLocaleTimeString()
      })
      // Save Message to Database
        message.save((err, result) => {
        if(err) throw err;
        messages.push(result)
      })   
      console.log(message);

      io.to(socket.room).emit("message", message);

    });

    // User disconected
    socket.on("disconnect", () => {
      socket.leave(socket.room)
      console.log(`${socket.username} hat den Chat verlassen.`);
      io.to(socket.room).emit("userLeft", socket.username);
    });
  });
});

