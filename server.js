const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const postRoutes = require('./routes/posts')

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(postRoutes);

const port = 8000;


const DB_URL = 'mongodb+srv://thara:tharanga113@cluster0.jpeks.mongodb.net/newCrud?retryWrites=true&w=majority';

mongoose.connect (DB_URL).then(()=>{
    console.log('DB Connected');
}).catch((err)=> console.log('DB connection error',err));

app.listen(port, () => {
    console.log(`app is running on ${port}`);
});

