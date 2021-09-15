import * as actionTypes from './actions/actionTypes'

const initialState = {
    cartBooks: [],
    favBooks: []
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
        default:
            return state
}

}
export default reducer