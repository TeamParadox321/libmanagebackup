import React, {Component} from 'react';
import axios from 'axios';

export default class AddBooks extends Component{

    constructor(props){
        super(props);

        this.onChangeBookId = this.onChangeBookId.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookCategory = this.onChangeBookCategory.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
        this.onChangeBookEdition = this.onChangeBookEdition.bind(this);
        this.onChangeBookIsbn = this.onChangeBookIsbn.bind(this);
        this.onChangeBookYear = this.onChangeBookYear.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            book_id : '',
            book_title : '',
            book_category : '',
            book_author : '',
            book_isbn: '',
            book_edition: '',
            book_year: ''
        }
    }

    onChangeBookId(e){
        this.setState({
            book_id : e.target.value
        })
    }
    onChangeBookTitle(e){
        this.setState({
            book_title : e.target.value
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
    onChangeBookEdition(e){
        this.setState({
            book_edition : e.target.value
        })
    }
    onChangeBookIsbn(e){
        this.setState({
            book_isbn : e.target.value
        })
    }
    onChangeBookYear(e){
        this.setState({
            book_year : e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const newBook = {
            book_id: this.state.book_id,
            book_title: this.state.book_title,
            book_category: this.state.book_category,
            book_author: this.state.book_author,
            book_isbn: this.state.book_isbn,
            book_edition: this.state.book_edition,
            book_year: this.state.book_year
        }
        axios.post('http://localhost:4000/books/addbooks', newBook);
        this.setState({
            book_id : '',
            book_title : '',
            book_category : '',
            book_author : '',
            book_isbn: '',
            book_edition: '',
            book_year: ''
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
                               value={this.state.book_isbn} onChange={this.onChangeBookIsbn}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Book Title" required="required"
                               value={this.state.book_title} onChange={this.onChangeBookTitle}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Book Edition"
                               value={this.state.book_edition} onChange={this.onChangeBookEdition}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Category"
                               value={this.state.book_category} onChange={this.onChangeBookCategory}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Author"
                               value={this.state.book_author} onChange={this.onChangeBookAuthor}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Published Year"
                               value={this.state.book_year} onChange={this.onChangeBookYear}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block">Add Book</button>
                    </div>
                </form>
            </div>
        )
    }
}

