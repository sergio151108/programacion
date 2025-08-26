const mongoose = require('mongoose');

const BookShema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    genre: {
        type:String,
        romance: true,
        required: true,
        trim: true,
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    isbn: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    publishedyear: {
        type: Number
    },
    stock: {
        type: Number,
        required: true,
        default: 1,
        min: 0
    }
},{
    timestamps: true 
});

module.exports = mongoose.model('BooK', BookShema);