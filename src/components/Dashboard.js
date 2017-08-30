import React, {Component} from 'react';
import ListBooks from "./ListBooks";
import {Route} from 'react-router-dom';
import SearchPage from "./SearchPage";
import * as BooksAPI from "../server/BooksAPI";

class Dashboard extends Component {

    state = {
        books: []
    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books: books})
        })
    }

    UpdateBookShelf = (book, shelf) => {
        BooksAPI.update(book, shelf);
        book.shelf = shelf;
        this.setState({
            books: this.state.books.filter(b => b.id !== book.id).concat([book])
        })
    };

    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <ListBooks booksOnShelf={this.state.books} updateBookShelf={this.UpdateBookShelf}/>
                )}/>
                <Route exact path="/search" render={() => (
                    <SearchPage booksOnShelf={this.state.books} updateBookShelf={this.UpdateBookShelf}/>
                )}/>
            </div>
        )
    }
}

export default Dashboard;
