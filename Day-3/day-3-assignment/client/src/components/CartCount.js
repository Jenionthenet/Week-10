import { connect } from 'react-redux'

function CartCount(props) {
const cart = props.cartBooks
    return (
        <div>
            <h1>Shopping Cart</h1>
            <h2>{cart.length}</h2>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cartBooks: state.cartBooks
    }
}

export default connect(mapStateToProps)(CartCount)