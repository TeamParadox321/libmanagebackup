import React, {Component} from 'react';
import axios from 'axios';
import { Link,NavLink } from "react-router-dom";

const Book = props => (
    <tr>
        <td> {props.book.book_id} </td>
        <td> {props.book.book_name} </td>
        <td> {props.book.book_category} </td>
        <td> {props.book.book_author} </td>

    </tr>
)

export default class InverntoryBooks extends Component{
    constructor(props){
        super(props);
        this.state = {books: []};
    }

    componentDidMount(){
        axios.get('http:/localhost:4000/books/')
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
            return <Book book={currentBook} key={i} />
        })
    }
    render(){
        return (
            <div className="container">
                <br/><br/><br/>
                <h2>All Books</h2>
                <table className="table text-light bg-secondary table-hover">
                    <thead>
                    <tr>
                        <th>Book ID</th>
                        <th>Book Name</th>
                        <th>Category</th>
                        <th>Author</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.bookList()}
                    </tbody>
                </table>
            </div>
        )
    }

//<th>Actions</th>  <td> <Link to={"/update_books"+props.book._id}> Edit </Link> </td>
}
