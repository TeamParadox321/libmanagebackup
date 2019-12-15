const express = require('express');
const cors = require('cors');
const routes = express.Router();
const app = express();
const Book = require('../models/book_model');
app.use(cors());

routes.route('/').get(function (req, res) {
    Book.find(function (err, books) {
        if(err){
            console.log(err);
        }else{
            res.json(books);
        }
    })
});

routes.route('/:id').get(function(req,res){
    let id = req.params.id;
    Book.findById(id, function (err, book) {
        res.json(book);
    })
});
routes.route('/addbooks').post(function (req,res) {
    let book = new Book(req.body);
    book.save()
        .then(book => {
            res.status(200).json({'book': 'book added successfully '});
        })
        .catch(err=>{
            res.status(400).send('adding new book failed');
        });
});
routes.route('/updatebooks/:id').post(function (req,res) {
    Book.findById(req.params.id, function (err, book) {
        if(!book){
            res.status(404).send('data is not found');
        }else{
            book.book_id = req.body.book_id;
            book.book_name = req.body.book_name;
            book.book_category = req.body.book_category;
            book.book_author = req.body.book_author;

            book.save().then(book => {
                res.json('Book Updated');
            })
                .catch(err=>{
                    res.status(400).send("Update not possible");
                });
        }
    });
});
module.exports = routes;