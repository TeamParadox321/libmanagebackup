const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Book = new Schema({
    book_id: {
        type: String
    },
    book_name: {
        type: String
    },
    book_category: {
        type: String
    },
    book_author: {
        type: String
    },
});

module.exports = mongoose.model('Book', Book);