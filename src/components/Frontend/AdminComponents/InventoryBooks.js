import React, {Component} from 'react';
import axios from 'axios';
import UpdateBooks from "./UpdateBooks";
import AddBooks from "./AddBooks";

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
        <td> {props.book.book_id} </td>
        <td> {props.book.book_title} </td>
        <td> {props.book.book_category} </td>
        <td> {props.book.book_author} </td>
        <td> <button type="button" className="btn" data-toggle="modal" data-target={`#${props.book._id}`}> Edit </button>
            <div className="container">
                <div className="modal close" id={`${props.book._id}`} data-dismiss="modal">
                            <UpdateBooks id={props.book._id}/>
                </div>
            </div>
        </td>
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

                <br/><br/>
                <center><b><h2 color={"red"}>All Books</h2></b></center>
                <br/>
                <table className="table text-light table-hover">
                    <thead>
                    <tr>
                        <th>Book ID</th>
                        <th>Book Title</th>
                        <th>Category</th>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.bookList()}
                    </tbody>
                </table>
                <br />
                <br />
                <center><button type="button" className="btn btn-primary bg-dark" data-toggle="modal" data-target="#myModal1">Add Books</button></center>
                <ADD/>
                <br/><br/><br/>
            </div>
        );
    }
}
