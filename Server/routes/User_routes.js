const express = require('express');
const cors = require('cors');
const routes = express.Router();
const app = express();
const User = require('../models/User_model');
const Book = require('../models/Book_model');
const History = require('../models/History_model');
const IssedBooks = require('../models/Issued_book_model');
const ReservedBooks = require('../models/Reserved_book_model');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
process.env.SECRET_KEY = "secrret";
app.use(cors());

routes.route('/').get(function (req, res) {
    User.find(function (err, users) {
        if(err){
            console.log(err);
        }else{
            res.json(users);
        }
    })
});

routes.route('/check').post(function (req, res) {
    var decoded = jwt.verify(req.body.token, process.env.SECRET_KEY);
    console.log(decoded.user_id);
    User.findOne({
        user_id: decoded.user_id
    })
        .then(user=>{
            if(user){
                res.send(true);
            }else{
                res.send(false);
            }
        })
        .catch(err=>{
            res.send(false);
        })
});

routes.route('/user_login').post(function (req,res) {
    User.findOne({
        user_id:req.body.user_id
    })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.user_password, user.user_password)){
                    const payload = {
                        _id: user._id,
                        user_id: user.user_id
                    };
                    let token = jwt.sign(payload, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    });
                    res.send({token: token, role: user.user_role, id: user.user_id})
                } else {
                    res.send("Password does not match");
                }
            } else {
                res.send("User doesnot exist")
            }
        })
        .catch(err => {
            res.send('error ' + err)
        })
});



routes.route('/user_signup').post(function (req,res) {
    console.log('hello');
    User.findOne({
        user_id:req.body.user_id
    })
        .then(user => {
            if(!user){
                bcrypt.hash(req.body.user_password, 10, (err, hash) => {
                    let usr = new User({
                        user_id: req.body.user_id,
                        user_name: req.body.user_name,
                        user_email: req.body.user_email,
                        user_phone_number: req.body.user_phone_number,
                        user_password: hash,
                        user_role: 'student',
                        user_approved: false
                    });
                    usr.save()
                        .then(user => {
                            res.status(200).send('Student was registered successfully...');
                        })
                        .catch(err=>{
                            res.status(400).send('adding new Student failed...');
                        });
                })
            }else {
                res.send('The student is already exists...')
            }
        })
});

module.exports = routes;