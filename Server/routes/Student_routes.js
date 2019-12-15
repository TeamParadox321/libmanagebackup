const express = require('express');
const cors = require('cors');
const routes = express.Router();
const app = express();
const Student = require('../models/Student_model');
app.use(cors());

routes.route('/student_signup').post(function (req,res) {
    let user = new Student(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'user': 'User added successfully '});
        })
        .catch(err=>{
            res.status(400).send('adding new User failed');
        });
});

module.exports = routes;