import React, {Component} from 'react';
import axios from 'axios';

export default class AddBooks extends Component{

    constructor(props){
        super(props);

        this.onChangeBookId = this.onChangeBookId.bind(this);
        this.onChangeBookName = this.onChangeBookName.bind(this);
        this.onChangeBookCategory = this.onChangeBookCategory.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            book_id : '',
            book_name : '',
            book_category : '',
            book_author : ''
        }
    }

    onChangeBookId(e){
        this.setState({
            book_id : e.target.value
        })
    }
    onChangeBookName(e){
        this.setState({
            book_name : e.target.value
        })
    }
    onChangeBookCategory(e){
        this.setState({
            book_category : e.target.value
        })
    }
    onChangeBookAuthor(e){
        this.setState({
            book_author : e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const newBook = {
            book_id: this.state.book_id,
            book_name: this.state.book_name,
            book_category: this.state.book_category,
            book_author: this.state.book_author
        }
        axios.post('http://192.168.8.104:4000/books/addbooks', newBook);
        this.setState({
            book_id : '',
            book_name : '',
            book_category : '',
            book_author : ''
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
                        <input type="text" className="form-control" placeholder="Book Name" required="required"
                               value={this.state.book_name} onChange={this.onChangeBookName}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Category" required="required"
                               value={this.state.book_category} onChange={this.onChangeBookCategory}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Author" required="required"
                               value={this.state.book_author} onChange={this.onChangeBookAuthor}/>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block">Add Books</button>
                    </div>
                </form>
            </div>
        )
    }
}

