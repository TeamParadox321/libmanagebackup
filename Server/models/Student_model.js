const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Student = new Schema({
    stu_id: {
        type: String
    },
    stu_email: {
        type: String
    },
    stu_name: {
        type: String
    },
    stu_phone_number:{
        type: String
    },
    stu_password: {
        type: String
    }
});

module.exports = mongoose.model('students', Student);