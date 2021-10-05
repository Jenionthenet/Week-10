import { connect } from 'react-redux'

function CartList(props) {

    const cartItems = props.cartBooks.map((book) => {
        return <li key = {book.id}>
                <h2>{book.title}</h2>
                <h3>{book.author}</h3>
                <h4>{book.isbn}</h4>
                <img src={book.cover_image_url} />
               

            </li>
    })

    return (
        <div>
            <h1>CartList</h1>
            <ul>
                {cartItems}
            </ul>
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        cartBooks: state.cartBooks
        
    }
}

export default connect(mapStateToProps)(CartList)