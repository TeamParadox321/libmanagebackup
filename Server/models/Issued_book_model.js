const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let IssuedBook = new Schema({
    book_id: {
        type: String
    },
    student_id: {
        type: String
    },
    book_title: {
        type: String
    },
    issued_date: {
        type: Date
    },
    expected_return_date: {
        type: Date
    }
});
module.exports = mongoose.model('issued_books', IssuedBook);