import React, {Component} from 'react';
import axios from 'axios';

export default class IssuedBooks extends Component{

    constructor(props){
        super(props);

        this.onChangeBookId = this.onChangeBookId.bind(this);
        this.onChangeStudentId = this.onChangeStudentId.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            book_id : '',
            stu_id : ''
        }
    }

    onChangeBookId(e){
        this.setState({
            book_id : e.target.value
        })
    }
    onChangeStudentId(e){
        this.setState({
            stu_id : e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const newBook = {
            book_id: this.state.book_id,
            stu_id: this.state.stu_id
        }
        axios.post('http://localhost:4000/books/addbooks', newBook);
        this.setState({
            book_id : '',
            stu_id : ''
        });
    }

    render() {
        return(
            <div className="login-form">
                <form onSubmit={this.onSubmit}>
                    <h2 className="text-center"> Add Books </h2>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Book ID" required="required"
                               value={this.state.book_id} onChange={this.onChangeBookId}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Book ISBN" required="required"
                               value={this.state.stu_id} onChange={this.onChangeStudentId}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block">Issue Book</button>
                    </div>
                </form>
            </div>
        )
    }
}