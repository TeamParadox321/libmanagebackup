const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ReservedBook = new Schema({
    book_id: {
        type: String
    },
    studnet_id: {
        type: String
    },
    reserved_date: {
        type: Date
    }
});

module.exports = mongoose.model('reserved_books', ReservedBook);