import React, {Component} from 'react';
import '../assets/css/App.css'
import Book from "./Book";
import {Link} from "react-router-dom";

class ListBooks extends Component {


    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.props.booksOnShelf.filter((book) => (book.shelf === 'currentlyReading')).map((book) => (
                                        <li>
                                            <Book book={book} updateBookShelf={this.props.updateBookShelf}/>
                                        </li>))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.props.booksOnShelf.filter((book) => (book.shelf === 'wantToRead')).map((book) => (
                                        <li>
                                            <Book book={book} updateBookShelf={this.props.updateBookShelf}/>
                                        </li>))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.props.booksOnShelf.filter((book) => (book.shelf === 'read')).map((book) => (
                                        <li>
                                            <Book book={book} updateBookShelf={this.props.updateBookShelf}/>
                                        </li>))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/search" className="open-search"><a>Add a book</a></Link>
            </div>
        )
    }
}

export default ListBooks;
