const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
const Admin = require('./models/admin');
var router = require('./routes')(app, Admin);

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// mongoose db 설정
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', ()=>{
  console.log("Connected to mongodb server");
})

mongoose.connect(DB_URL);

// Run Server
const server = app.listen(PORT, ()=>{
  console.log('Server started on port' + PORT);
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
})



