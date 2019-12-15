const express = require('express');
const cors = require('cors');
const routes = express.Router();
const app = express();
const Student = require('../models/Student_model');
const Book = require('../models/Book_model');
const History = require('../models/History_model');
const IssedBooks = require('../models/Issued_book_model');
const ReservedBooks = require('../models/Reserved_book_model');
const Admin = require('../models/Admin_model');
const UserBook = require('../models/Book_for_users_model');
app.use(cors());


routes.route('/issue_book').post(function (req,res) {
    let issue = new IssedBooks(req.body);
    issue.save()
        .then(user => {
            res.status(200).json({'user': 'User added successfully '});
        })
        .catch(err=>{
            res.status(400).send('adding new User failed');
        });
});

module.exports = routes;