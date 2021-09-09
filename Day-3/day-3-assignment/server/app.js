const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())


const books = [
    {title: 'This One Summer', author: "Mariko Tamaki & Jillian Tamaki", isbn: "159643774X", coverImageUrl: "https://images-na.ssl-images-amazon.com/images/I/81Fs6+n4aqL.jpg"},

    {title: "Apprenticed to Venus: My Years with Anaïs Nin", author: "Tristine Rainer", isbn: "1948924196", coverImageUrl: "https://images-na.ssl-images-amazon.com/images/I/61IpScsdZvL.jpg" }
]

app.get('/books', (req, res) => {
    res.json(books)
})


app.post('/books' , (req, res) => {
    const title = req.body.title
    const author = req.body.author
    const isbn = req.body.isbn
    const coverImageUrl = req.body.coverImageUrl

    const book = {title: title, author: author, isbn: isbn, coverImageUrl: coverImageUrl}

    books.push(book)
    res.json({success: true, message: 'Book has been added!'})

    // res.redirect("http://localhost:3000/books")
})




app.listen(8080, () => {
    console.log("Server is running...")
})