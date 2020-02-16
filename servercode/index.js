var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var route = require('./route/routes.js');
var app = express();

mongoose.connect('mongodb://localhost:27017/shoppinglist');
mongoose.connection.on('connected',()=>{
    console.log('Connected to the database');
});
mongoose.connection.on('error', (err)=>{
    console.log('erreur dans la connexion');
});

var PORT=3000 ;

app.use(cors());
app.use(bodyparser.json());
app.use('/api',route)

app.listen(PORT , ()=>{
    console.log('connexion au port :' +PORT);
});
app.get('/', (req,res) =>{
    res.send('cest bon');
});