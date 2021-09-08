import { Component } from "react";
import './body.css'

class Body extends Component {

    render() {
        const imgUrl = 'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/'
        const books = this.props.books

        const bookItems = books.map((book, index) => {
            return <li key={index}>
                <h2 id="bookTitle">{book.title}</h2>
                <h3 id="bookAuthor">{book.author}</h3>
                <img id="coverImg"src={imgUrl+book.imageLink}/>
                </li>
        })

        return (
            <div>
                <h1 id="popBooks">Popular Books</h1>
                <ul id="booksUl">
                {bookItems}
                </ul>
            </div>
        )
    }

}

export default Body