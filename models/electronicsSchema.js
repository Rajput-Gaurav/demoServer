// create Schema:
const mongoose = require('mongoose');

const ElecSchema = mongoose.Schema({
    name: {type: String},
    description: {type: String},
    price: {type: String},
    image: {type: String}
});

const ElectroSchema = mongoose.model('ElectroSchema', ElecSchema);
module.exports = ElectroSchema;