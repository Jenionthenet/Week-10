import { connect } from 'react-redux'
import * as actionCreators from '../store/creators/actionCreators'
import { useEffect } from 'react'
import * as actionTypes from '../store/actions/actionTypes'


function BookList(props) {

    useEffect(() => {
        props.onFetchBooks()
    }, [])


    const handleBookDelete = (book) => {
        fetch(`http://localhost:8080/books/${book.id}`, {
            method: 'DELETE'
        }).then(response => response.json())
        .then(result => {
            console.log(result)
            props.onFetchBooks()
        })
    }

       

  
    const bookItems = props.books.map(book => {
        return <li >
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <h4>{book.isbn}</h4>
            <img src={book.cover_image_url} />
            <button onClick={() => props.onAddToCart(book)}>Add to Cart</button>
            <button onClick={() => props.onAddToFavorites(book)}>Add to Favorites</button>
            <button onClick={() => handleBookDelete(book)}>Delete</button>

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

const mapDispatchToProps = (dispatch) => {
    return {
        onAddToCart: (value) => dispatch(actionCreators.submitBooks(value)),
        onAddToFavorites: (favorites) => dispatch(actionCreators.submitBooksToFavs(favorites)),
        onFetchBooks: (book) => dispatch(actionCreators.fetchBooks(book))

    }

}


const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)