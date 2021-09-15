const express = require('express')
const cors = require('cors')
const app = express()
const models = require('./models')
global.bcrypt = require('bcryptjs')

const registerRouter = express('./routes/register')

app.use(cors())
app.use(express.json())



// app.use('/register', registerRouter)

const books = [
    {title: 'This One Summer', author: "Mariko Tamaki & Jillian Tamaki", isbn: "159643774X", coverImageUrl: "https://images-na.ssl-images-amazon.com/images/I/81Fs6+n4aqL.jpg"},

    {title: "Apprenticed to Venus: My Years with Anaïs Nin", author: "Tristine Rainer", isbn: "1948924196", coverImageUrl: "https://images-na.ssl-images-amazon.com/images/I/61IpScsdZvL.jpg" },
    {title: "The Orphan Master's Son: A Novel ", author: "Adam Johnson", isbn: "B006VPAT5O", coverImageUrl: "https://m.media-amazon.com/images/I/51Co0FZd6bL.jpg" }
]

app.get('/books', (req, res) => {
    res.json(books)
})


app.post('/books' , (req, res) => {
    const title = req.body.title
    const author = req.body.author
    const isbn = req.body.isbn
    const coverImageUrl = req.body.coverImageUrl
    const userId = 1

    const book = models.Book.build({
        title: title, 
        author: author, 
        isbn: isbn, 
        cover_image_url: coverImageUrl,
        user_id: userId

    })
    

    books.push(book)
    res.json({success: true, message: 'Book has been added!'})





    // res.redirect("http://localhost:3000/books")
})



app.post('/register', (req, res) => {
    

    const username = req.body.username
    const password = req.body.password
    bcrypt.genSalt(10, function (err, salt) {
        if (!err) {
            bcrypt.hash(password, salt, function (err, hash) {
                const user = models.User.build({
                    username: username,
                    password: hash
                })
                user.save()
                    .then(newUser => {
                        console.log('user added successfully')
                        
                        res.json({ success: true, message: 'User has been registered!' })
                    })

            })

        }


    })

})

app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    console.log(username, password)

    models.User.findOne({ where: {username: username}})

    .then((user) => {
        bycrpt.compare(password, user.password, function(err, result) {
            if(result ==false) {
            res.json({message:"invalid username or password"} )

            } else{
                res.json(user)
            }
        })
    })
})

app.listen(8080, () => {
    console.log("Server is running...")
})