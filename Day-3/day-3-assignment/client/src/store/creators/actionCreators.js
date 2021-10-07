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

export const fetchPosts = () => {
    
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            dispatch({type: actionTypes.POSTS_LOADED, payload: posts})
        })
    }
}

export const fetchBooks = () => {
    const token = localStorage.getItem('jsonwebtoken')
    return (dispatch) => {
       fetch('http://localhost:8080/books', {
           method: 'GET',
           headers: {
               'Authorization': `Bearer ${token}`
           }
       })
       .then(response => response.json())
       .then(books => {
           dispatch({type: actionTypes.BOOKS_LOADED, 
            payload: books})
       })
        
    
    }
}


// export const removeBooks = (index) => {
//     return {
//         type: actionTypes.BOOKS_REMOVED,
//         index: index
//     }
// }