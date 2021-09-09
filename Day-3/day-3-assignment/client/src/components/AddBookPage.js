import { Component } from "react";


class AddBookPage extends Component {

    constructor() {
        super()
        this.state = {
            title: "",
            author: "",
            isbn: "",
            coverImageUrl: ""
        }
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSave = () => {
        console.log( this.state.title,
            this.state.author,
             this.state.isbn,
             this.state.coverImageUrl)
        fetch('http://localhost:8080/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                author: this.state.author,
                isbn: this.state.isbn,
                coverImageUrl: this.state.coverImageUrl
            })
        }).then(response => response.json())
            .then(result => {
                if (result.success) {
                    this.props.history.push('/books')
                }
            })
    }

    render() {
        return (
            <div>
                <h1>Add Book</h1>
                <input type="text" onChange={this.handleOnChange} placeholder="Enter book title" name="title" />
                <input type="text" onChange={this.handleOnChange} placeholder="Enter author"
                    name="author" />
                <input type="text" onChange={this.handleOnChange} placeholder="Enter book isbn" name="isbn" />
                <input type="text" onChange={this.handleOnChange} placeholder="Enter book cover URL" name="coverImageUrl" />
                <button onClick={this.handleSave}>Submit</button>
            </div>
        )
    }

}

export default AddBookPage