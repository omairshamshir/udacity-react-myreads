import React from 'react'
import '../assets/css/App.css'
import * as BooksAPI from "../server/BooksAPI";
import Book from "./Book";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types'

class SearchPage extends React.Component {
    static propTypes = {
        booksOnShelf: PropTypes.array.isRequired,
        updateBookShelf: PropTypes.func.isRequired,
    };

    state = {
        query: '',
        books: []
    };

    UpdateSearchResult = () => (
        BooksAPI.search(this.state.query, 20).then((books) => {
            if (books.error)
                books = [];

            books.map(book => (this.props.booksOnShelf.filter((b) => b.id === book.id).map(b => book.shelf = b.shelf)));
            this.setState(
                {
                    books: books,
                })
        })
    );

    UpdateBookListByQuery = (value) => {
        if (!value) {
            this.setState({
                query: '',
                books: []
            })
        }
        else {
            this.setState({query: value}, this.UpdateSearchResult);
        }

    };

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search"></Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                               placeholder="Search by title or author"
                               value={this.state.query}
                               onChange={(event) => this.UpdateBookListByQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books.map((book) => (
                            <li>
                                <Book book={book} updateBookShelf={this.props.updateBookShelf}/>
                            </li>))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage;
