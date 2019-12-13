import React, {Component} from 'react';
import  axios from 'axios';

export default class EditTodo extends Component{

    constructor(props){
        super(props);

        this.onChangeBookId = this.onChangeBookId.bind(this);
        this.onChangeBookName = this.onChangeBookName.bind(this);
        this.onChangeBookCategory = this.onChangeBookCategory.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            book_id: '',
            book_name: '',
            book_category: '',
            book_author: ''
        }
    }
    componentDidMount(){
        axios.get('http://localhost:4000/books/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    book_id: response.data.book_id,
                    book_name: response.data.book_name,
                    book_category: response.data.book_category,
                    book_author: response.data.book_author
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }



    onChangeBookId(e){
        this.setState({
            book_id: e.target.value
        });
    }

    onChangeBookName(e){
        this.setState({
            book_name: e.target.value
        });
    }
    onChangeBookCategory(e){
        this.setState({
            book_category: e.target.value
        });
    }

    onChangeBookAuthor(e){
        this.setState({
            book_author: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault()
        const obj = {
            book_id: this.state.book_id,
            book_name: this.state.book_name,
            book_category: this.state.book_category,
            book_author: this.state.book_author
        };
        axios.post('http://localhost:4000/books/updatebooks/'+this.props.match.params.id, obj)
            .then(res=>console.log(res.data));
        this.props.history.push('/');
    }

    render() {
        return(
            <div className="login-form">

                <form onSubmit={this.onSubmit}>
                    <h2 className="text-center"> Update Books </h2>
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
                        <button type="submit" className="btn btn-primary btn-block">Update Book</button>
                    </div>
                </form>
            </div>
        )
    }
}

