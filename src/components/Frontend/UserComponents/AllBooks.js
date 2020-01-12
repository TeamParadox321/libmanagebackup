import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const Book = props => (
    <tr>
        <td> <Link to={'/book/'+props.book._id}>{props.book.book_id}</Link>  </td>
        <td> {props.book.book_title} </td>
        <td> {props.book.book_category} </td>
        <td> {props.book.book_author} </td>
        <td> {props.book.book_availability.toString()} </td>
    </tr>
);
export default class AllBooks extends Component{
    constructor(props){
        super(props);
        this.state = {books: []};
    }
    componentDidMount(){
        axios.get('http://localhost:4000/books/')
            .then(response=>{
                this.setState({books: response.data})
            })
            .catch(function (error) {
                console.log(error)
            });
    }
    componentDidUpdate(){
        axios.get('http://localhost:4000/books/')
            .then(response=>{
                this.setState({books: response.data})
            })
            .catch(function (error) {
                console.log(error)
            });
    }
    bookList(){
        return this.state.books.map(function (currentBook, i) {
            {console.log(currentBook)}
            return <Book book={currentBook} key={i} />
        })
    }
    render(){
        return (
            <div className="container">
                <center><b><h2 className={"p-3 my-3 text-dark"} color={"red"}>All Books</h2></b></center>
                <table id="example" class="table bg-white table-striped table-bordered border-0 table-hover">
                    <thead className="thead-dark">
                    <tr>
                        <th>Book ID</th>
                        <th>Book Title</th>
                        <th>Category</th>
                        <th>Author</th>
                        <th>Availability</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.bookList()}
                    </tbody>
                </table>
                <br />
            </div>
        );
    }
}
