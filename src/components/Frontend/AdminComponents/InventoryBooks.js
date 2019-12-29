import React, {Component} from 'react';
import axios from 'axios';
import UpdateBooks from "./UpdateBooks";
import AddBooks from "./AddBooks";

const ADD = () => (
    <div className="container">
        <div className="modal close" id="myModal1" data-dismiss="modal">
            <div>
                <AddBooks/>
            </div>
        </div>
    </div>
);
var a;
var test = false;
const Update = props => (
    <div className="container">
        <div className="modal close" id="myModal3" data-dismiss="modal">
            <div>
                <UpdateBooks id={a} ch={change}/>
            </div>
        </div>
    </div>
);
const change = () => {
    a = '';
    test = false;
}
const Book = props => (
    <tr>
        <td> {props.book.book_id} </td>
        <td> {props.book.book_title} </td>
        <td> {props.book.book_category} </td>
        <td> {props.book.book_author} </td>
        <td> <a data-toggle="modal" data-target="#myModal3" href={""} onClick={()=>{
            a=props.book._id;
            test = true;
        }}> Edit </a> </td>
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
            return <Book book={currentBook} key={i} />
        })
    }
    render(){
        let update;
        {if(test){
            update = <Update/>
        }}
        return (
            <div className="container">

                <br/><br/><br/>
                <h2>All Books</h2>
                <table className="table text-light bg-secondary table-hover">
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
                {update}
            </div>
        );
        {
            test=false;
        }
    }
}
