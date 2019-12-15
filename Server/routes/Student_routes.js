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

app.use(cors());

routes.route('/').get(function (req, res) {
    Student.find(function (err, students) {
        if(err){
            console.log(err);
        }else{
            res.json(students);
        }
    })
});

routes.route('/student_signup').post(function (req,res) {
    Student.findOne({
        stu_id:req.body.stu_id
    })
        .then(stu => {
            if(!stu){
                let user = new Student(req.body);
                user.save()
                    .then(user => {
                        res.status(200).json({'user': 'Student added successfully '});
                    })
                    .catch(err=>{
                        res.status(400).send('adding new User failed');
                    });
            }
        })



});

module.exports = routes;