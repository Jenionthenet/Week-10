import { useState } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../store/creators/actionCreators'


function AddBookPage(props) {

   const [book, setBook] = useState({})

   const  handleOnChange = (e) => {
        
    setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }

    const handleSave = () => {
      
        fetch('http://localhost:8080/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        }).then(response => response.json())
            .then(result => {
                if (result.success) {
                    props.onBooksLoaded()
                }
            })
    }

    
        return (
            <div>
                <h1>Add Book</h1>
                <input type="text" onChange={handleOnChange} placeholder="Enter book title" name="title" />
                <input type="text" onChange={handleOnChange} placeholder="Enter author"
                    name="author" />
                <input type="text" onChange={handleOnChange} placeholder="Enter book isbn" name="isbn" />
                <input type="text" onChange={handleOnChange} placeholder="Enter book cover URL" name="coverImageUrl" />
                <button onClick={handleSave}>Submit</button>
            </div>
        )
    }

const mapDispatchToProps = (dispatch) => {
    return {
        onBooksLoaded: () => dispatch(actionCreators.fetchBooks())
    }
}

export default connect(null, mapDispatchToProps)(AddBookPage)