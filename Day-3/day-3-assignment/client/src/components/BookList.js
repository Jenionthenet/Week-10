import { Component } from "react";
import { connect } from 'react-redux'
import * as actionCreators from '../store/creators/actionCreators'

class BookList extends Component {

    
    
    handleAddToCart = (book) => {
        console.log(book)
        this.props.onAddToCart(book)


    }

    handleAddToFavorites = (book) => {
        console.log(book) 
        this.props.onAddToFavorites(book)
    }


   
    render() {
        const books = this.props.books
        const bookItems = books.map((book, index) => {
            return <li key = {index}>
                <h2>{book.title}</h2>
                <h3>{book.author}</h3>
                <h4>{book.isbn}</h4>
                <img src={book.coverImageUrl} />
                <button onClick={() =>this.handleAddToCart(book)}>Add to Cart</button>
                <button onClick={() =>this.handleAddToFavorites(book)}>Add to Favorites</button>

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

const mapDispatchToProps = (dispatch) => {
    return {
       onAddToCart: (value) => dispatch(actionCreators.submitBooks(value)),
       onAddToFavorites: (favorites) => dispatch(actionCreators.submitBooksToFavs(favorites))
}

}

export default connect(null, mapDispatchToProps)(BookList)