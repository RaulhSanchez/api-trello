const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.json()); 


app.get('/', function(req, res) {
    res.json({ mensaje: '¡Hola Mundo!' })   
  })

app.listen(process.env.PORT, () => console.log('Funcionando'))
console.log(process.env.PORT)