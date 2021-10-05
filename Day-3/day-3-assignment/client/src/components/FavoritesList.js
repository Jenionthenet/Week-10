import { connect } from 'react-redux'

function FavoritesList(props) {

    const favoriteItems = props.favBooks.map((book, index) => {
        return <li key = {index}>
            <h2>{book.title}</h2>
                <h3>{book.author}</h3>
                <h4>{book.isbn}</h4>
                <img src={book.cover_image_url} />

        </li>
    })

    return (
        <div>
            <h1>Favorite Books</h1>
            <ul>
                {favoriteItems}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        favBooks: state.favBooks
    }
}

export default connect(mapStateToProps)(FavoritesList)