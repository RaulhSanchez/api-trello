const { Schema, model } = require('mongoose');


const panelSchema = new Schema({
    idUser:{type: Schema.Types.ObjectId, ref: "User"},
    title:{ type: String, required: true, trim: true, },
    description:{ type: String, required: true },
}) 

module.exports = model('Panel', panelSchema)