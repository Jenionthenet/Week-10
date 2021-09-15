import { connect } from 'react-redux'

function CartList(props) {

    const cartItems = props.cartBooks.map((book, index) => {
        return <li key = {index}>
                <h2>{book.title}</h2>
                <h3>{book.author}</h3>
                <h4>{book.isbn}</h4>
                <img src={book.coverImageUrl} />
               

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