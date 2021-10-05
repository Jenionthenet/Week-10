const express = require('express')
const cors = require('cors')
const app = express()
const models = require('./models')
const jwt = require('jsonwebtoken')
global.bcrypt = require('bcryptjs')
const authenticate = require('./middleware/authentication')

const registerRouter = express('./routes/register')

require('dotenv').config()

app.use(cors())
app.use(express.json())



// app.use('/register', registerRouter)



app.get('/books', authenticate, (req, res) => {
    models.Book.findAll().then(books => {
        res.json(books)
    })
    
})


app.post('/books', (req, res) => {
    const title = req.body.title
    const author = req.body.author
    const isbn = req.body.isbn
    const coverImageUrl = req.body.coverImageUrl
   

    const book = models.Book.build({
        title: title, 
        author: author, 
        isbn: isbn, 
        cover_image_url: coverImageUrl
       

    })
    

    book.save()
        .then(savedBook => {
        res.json({success: true, bookId: savedBook.id})
    })
   
})


app.delete('/books/:bookId', (req, res) => {
    
    const bookId = parseInt(req.params.bookId)

    models.Book.destroy({
        where: {
            id: bookId
        }
    }).then(books => {
        res.json({success: true})
    })
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

    models.User.findAll({ where: {username: username}})

    .then((user) => {
        bcrypt.compare(password, user.password, function(err, result) {
            if(result ==false) {
            res.json({loggedIn: false, message:"invalid username or password"} )

            } else{
                const token = jwt.sign({username: username}, process.env.JWT_SECRET_KEY)
                res.json({loggedIn: true, token: token}) 
                
            }
        })
    })
})

app.listen(8080, () => {
    console.log("Server is running...")
})