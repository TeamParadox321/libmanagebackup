const express = require('express');
const app = express();
const bosyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const bookRoutes = express.Router();
let Book = require('./book_model');

app.use(cors());
app.use(bosyParser.json());

mongoose.connect('mongodb://localhost/books' , { useUnifiedTopology: true, useNewUrlParser: true}).catch(err=>{
  console.log("db error "+ err.message);
});
const connection = mongoose.connection;

connection.once('open', function () {
  console.log("MongoDB connection established successfully ");
});

bookRoutes.route('/').get(function (req, res) {
  Book.find(function (err, books) {
    if(err){
      console.log(err);
    }else{
      res.json(books);
    }
  })
});

bookRoutes.route('/:id').get(function(req,res){
  let id = req.params.id;
  Todo.findById(id, function (err, book) {
    res.json(book);
  })
});
bookRoutes.route('/addbooks').post(function (req,res) {
  let book = new Book(req.body);
  book.save()
      .then(book => {
        res.status(200).json({'book': 'book added successfully '});
      })
      .catch(err=>{
        res.status(400).send('adding new book failed');
      });
});
bookRoutes.route('/updatebooks/:id').post(function (req,res) {
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

app.use('/books', bookRoutes);

app.listen(PORT, function () {
  console.log("Server is running on Port : " + PORT);
});