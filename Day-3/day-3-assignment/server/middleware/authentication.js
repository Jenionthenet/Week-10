const jwt = require('jsonwebtoken')

function authenticate(req, res, next) {

    let headers = req.headers['authorization']
    if(headers) {
        const token = headers.split(' ')[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        if(decoded) {
            const username = decoded.username
            const authUser = user.find(user => user.username == username)
            if(authUser) {
                next()
            } else {
                res.json({error: 'Unable to authenticate'})
            }
        } else {
            res.json({error: 'Unable to authenticate'})
        }
    } else {
        res.json({error: 'Requied headers are missing...'})
    }
}

module.exports= authenticate 