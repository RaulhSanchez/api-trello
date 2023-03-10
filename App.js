const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const userRoutes = require('./User/UserRouter')
const panelRouter = require('./Panel/PanelRoute')

mongoose.set("strictQuery", false);
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.json()); 

mongoose.connect('mongodb+srv://user:admin@cluster0.1dmkftf.mongodb.net/test', {
    user:"user",
    pass: "admin",
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Conectado a la BBDD.'))
    .catch((e) => console.log(e))

// Rutas User
app.use('/registerUser',userRoutes)
app.use('/profile',userRoutes)


// Rutas Panel
app.use('/panel',panelRouter)

app.listen(process.env.PORT, () => console.log('Funcionando'))
console.log(process.env.PORT)