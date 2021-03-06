import React, {Component} from 'react';
import '../assets/css/App.css'
import '../assets/css/book.css'
import PropTypes from 'prop-types'


class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        updateBookShelf: PropTypes.func.isRequired
    };

    HandleShelfChangeEvent = (value) => {
        this.props.updateBookShelf(this.props.book, value)
    };

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover"><img className="thumbnail-image"
                                                     src={this.props.book.imageLinks.thumbnail}/>
                    </div>
                    <div className="book-shelf-changer">
                        <select onChange={(event) => this.HandleShelfChangeEvent(event.target.value)}
                                value={this.props.book.shelf}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors?  this.props.book.authors.join(', '): ''}</div>
            </div>
        )
    }
}

export default Book;
