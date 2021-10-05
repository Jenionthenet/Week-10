import * as actionTypes from './actions/actionTypes'

const initialState = {
    cartBooks: [],
    favBooks: [],
    posts: [],
    books: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.BOOKS_SUBMITTED:
            return {
                ...state,
                cartBooks: state.cartBooks.concat(action.payload)
            }

        case actionTypes.BOOKS_SUBMITTED_TO_FAVORITES:
            return {
                ...state,
                favBooks: state.favBooks.concat(action.payload)
            }

        case actionTypes.POSTS_LOADED:
            return {
                ...state,
                posts: action.payload

            }
        
        case actionTypes.BOOKS_LOADED:
            return {
                ...state,
                books: action.payload
            }

        default:
            return state
}

}
export default reducer