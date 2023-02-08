const { Schema, model } = require('mongoose');
const  hash  = require ('./UserFunctions');

const userSchema = new Schema({
    name:{ type: String, required: true, trim: true, },
    lastName:{ type: String, required: true },
    age:{ type: Number, required: true },
    role:{ type: String,  lowercase: true, },
    email:{
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Por favor, ingresa un mail válido.']
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minlength: 8, // colocar en el controlador
        set:hash.createHash
    },
}) 

module.exports = model('User', userSchema)