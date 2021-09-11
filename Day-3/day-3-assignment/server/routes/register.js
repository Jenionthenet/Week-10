const { hash } = require('bcryptjs')
const express = require('express')

const router = express()

const models = require('../models')

router.post('/', (req, res) => {
    res.json({ success: true, message: 'User has been registered!' })

    // const username = req.body.username
    // const password = req.body.password
    // bcrypt.genSalt(10, function (err, salt) {
    //     if (!err) {
    //         bcrypt.hash(password, salt, function (err, hash) {
    //             const user = models.User.build({
    //                 username: username,
    //                 password: hash
    //             })
    //             user.save()
    //                 .then(newUser => {
    //                     console.log('user added successfully')
    //                     users.push(user)
    //                     res.json({ success: true, message: 'User has been registered!' })
    //                 })

    //         })

    //     }


    // })


})

module.exports = router