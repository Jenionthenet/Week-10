
import BookList from "./BookList";
// import { useEffect } from 'react';
// import { connect, useSelector } from 'react-redux'
// import * as actionTypes from '../store/actions/actionTypes'
// import * as actionCreators from '../store/creators/actionCreators'


function BookListPage(props) {

   
    // useEffect(() => {
    //     props.onFetchBooks()
    // }, [])


   
        
    return (
        <div>
            <h1>Book List </h1>
            <BookList />
        </div>
    );

}




// const mapDispatchToProps = (dispatch) => {

//     return {
//         onFetchBooks: () => dispatch(actionCreators.fetchBooks())
//     }
// }
// console.log(mapDispatchToProps)
export default BookListPage