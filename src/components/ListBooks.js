import React, {Component} from 'react';
import '../assets/css/App.css'
import Book from "./Book";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types'

class ListBooks extends Component {
    static propTypes = {
        booksOnShelf: PropTypes.array.isRequired,
        updateBookShelf: PropTypes.func.isRequired
    };

    render() {
        const shelves = {
            currentlyReading: 'Currently Reading',
            wantToRead: 'Want to Read',
            read: 'Read'
        };
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {Object.keys(shelves).map((key, index) => (
                            <div key={index} className="bookshelf">
                                <h2 className="bookshelf-title">{shelves[key]}</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {this.props.booksOnShelf.filter((book) => (book.shelf === key)).map((book) => (
                                            <li key={book.id}>
                                                <Book book={book} updateBookShelf={this.props.updateBookShelf}/>
                                            </li>))}
                                    </ol>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default ListBooks;
