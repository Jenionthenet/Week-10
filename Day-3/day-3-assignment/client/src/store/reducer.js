import * as actionTypes from './actions/actionTypes'

const initialState = {
    cartBooks: [],
    favBooks: [],
    posts: [],
    books: [], 
    isAuthenticated: false
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
        
        case actionTypes.ON_LOGIN:
            return {
                ...state,
                isAuthenticated: true
            }

        case actionTypes.ON_LOGOUT:
            return {
                ...state,
                isAuthenticated: false

            }

        default:
            return state
}

}
export default reducer