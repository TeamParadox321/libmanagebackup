const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Admin = new Schema({
    admin_id: {
        type: String
    },
    admin_email: {
        type: String
    },
    admin_name: {
        type: String
    },
    admin_password: {
        type: String
    }
});

module.exports = mongoose.model('admins', Admin);