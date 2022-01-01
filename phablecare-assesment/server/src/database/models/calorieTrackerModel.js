const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemsSchema = new Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    item: {
        type: String,
        required: false,
    },
    calories: {
        type: String,
        required: true
    }
});

module.exports = ItemsSchema;