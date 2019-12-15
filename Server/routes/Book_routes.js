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
    Book.findOne({
        book_id: req.body.book_id
    })
        .then(book => {
            if(!book){
                let book = new Book({
                    book_id : req.body.book_id,
                    book_title : req.body.book_title,
                    book_category : req.body.book_category,
                    book_author : req.body.book_author,
                    book_edition : req.body.book_edition,
                    book_pages : req.body.book_pages,
                    book_isbn : req.body.book_isbn,
                    book_year : req.body.book_year,
                    book_availability: true
                });
                book.save()
                    .then(book => {
                        res.status(200).json({'book': 'book added successfully '});
                    })
                    .catch(err=>{
                        res.status(400).send('adding new book failed');
                    });
            }
        })
});

routes.route('/updatebooks/:id').post(function (req,res) {
    Book.findById(req.params.id, function (err, book) {
        if(!book){
            res.status(404).send('data is not found');
        }else{
            book.book_id = req.body.book_id;
            book.book_title = req.body.book_title;
            book.book_category = req.body.book_category;
            book.book_author = req.body.book_author;
            book.book_isbn = req.body.book_isbn;
            book.book_year = req.body.book_year;
            book.book_edition = req.body.book_edition;
            book.book_pages = req.body.book_pages;

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