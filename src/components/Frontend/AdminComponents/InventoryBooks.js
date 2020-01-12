import React, {Component} from 'react';
import axios from 'axios';
import UpdateBooks from "./UpdateBooks";
import AddBooks from "./AddBooks";
import {Link} from "react-router-dom";

const ADD = (props) => (
    <div className="container">
        <div className="modal close" id="myModal1" data-dismiss="modal">
            <div>
                <AddBooks/>
            </div>
        </div>
    </div>
);

const Book = props => (
    <tr>
        <td> <Link to={'/book/'+props.book._id}>{props.book.book_id}</Link> </td>
        <td> {props.book.book_title} </td>
        <td> {props.book.book_category} </td>
        <td> {props.book.book_author} </td>
    </tr>
);
export default class InverntoryBooks extends Component{
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
                <div style={{"display": "flex","max-height": "100px"}}>
                    <button style={{"max-height":"40px","margin-top":"40px"}} type="button" className="btn btn-outline-success" data-toggle="modal" data-target="#myModal1">Add Books</button>
                    <div className={"spacer"}></div>
                    <center><b><h2 className={"p-3 my-3 text-dark"} color={"red"}>All Books</h2></b></center>
                    <div className={"spacer"}></div>
                </div>
                <table id="example" className="table bg-white table-striped table-bordered border-0 table-hover">
                    <thead className="thead-dark">
                    <tr>
                        <th>Book ID</th>
                        <th>Book Title</th>
                        <th>Category</th>
                        <th>Author</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.bookList()}
                    </tbody>
                </table>
                <ADD/>
                <br/>
            </div>
        );
    }
}
