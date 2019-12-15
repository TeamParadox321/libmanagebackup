const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserBook = new Schema({
    book_title: {
        type: String
    },
    book_edition: {
        type: String
    },
    book_availability: {
        type: Number
    }
});

module.exports = mongoose.model('user_books', UserBook);