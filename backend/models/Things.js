const mongoose = require('mongoose');

// schéma de données
 
const thingSchema = mongoose.Schema({
    title: { type: String, required: true}, // required : trur cest-a-dire que le titre est un champ require obligatoire 
    description: { type: String, required: true},
    imageUrl: { type: String, required: true},
    userId: { type: String, required: true},
    price: { type: Number, required: true},

});

module.exports = mongoose.model('Things', thingSchema);