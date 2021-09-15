import * as actionTypes from '../actions/actionTypes'

export const submitBooks = (value) => {
    return {
        type: actionTypes.BOOKS_SUBMITTED,
        payload: value
    }
}

export const submitBooksToFavs = (favorites) => {
    return {
        type: actionTypes.BOOKS_SUBMITTED_TO_FAVORITES,
        payload: favorites
    }
}