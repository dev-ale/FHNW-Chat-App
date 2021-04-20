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



// All urls goto to index.html in /dist folder [build folder]
//app.use("/", serveStatic(path.join(__dirname, '/dist')))

//app.get(/.*/, function (req, res) {
//    res.sendFile(path.join(__dirname, '/dist/index.html'))
//})

const port = process.env.PORT || 5000;
app.listen(port)
console.log(`App is listening on port: ${port}`)
