import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const Book = props => (
    <tr>
        <td> <Link to={'/book/'+props.book._id}>{props.book.book_id}</Link>  </td>
        <td> {props.book.reserved_date} </td>
    </tr>
);
export default class AllBooks extends Component{
    constructor(props){
        super(props);
        this.state = {books: []};
    }
    componentDidMount(){
        axios.post('http://localhost:4000/users/reserved_books', {token:localStorage.usertoken})
            .then(response=>{
                this.setState({books: response.data})
            })
            .catch(function (error) {
                console.log(error)
            });
    }
    componentDidUpdate(){
        axios.post('http://localhost:4000/users/reserved_books',{token:localStorage.usertoken})
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
                <center><b><h4 className={"p-3 my-3 table text-white"} color={"red"}>Reserved Books</h4></b></center>
                <table className="table text-light table-hover">
                    <thead>
                    <tr>
                        <th>Book ID</th>
                        <th>Reserved Date</th>
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
