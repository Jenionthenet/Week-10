import { Component } from "react";

class BookList extends Component {
    render() {
        const books = this.props.books
        const bookItems = books.map((book) => {
            return <li>
                <h2>{book.title}</h2>
                <h3>{book.author}</h3>
                <h4>{book.isbn}</h4>
                <img src={book.coverImageUrl}/>
                
                </li>
        })

        return (
            <div>
                <h1>BookList</h1>
                <ul>
                {bookItems}
                </ul>
                
            </div>
        )
    }
}

export default BookList