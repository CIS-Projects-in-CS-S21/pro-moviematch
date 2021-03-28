const express = require('express')

const User = require('../models/User')

const router = express.Router()

router.post('/', (req, res) => {
    const user = new User({
        id: req.body.id,
        email: req.body.email,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        movie_id: req.body.movie_id,
        group_id: req.body.group_id,
        streaming_service: req.body.streaming_service
    })

    user.save()
    .then(result => {
        res.send({
            message: 'User data has been created succesfully.',
            data: result
        })
    })
    .catch(err => console.log(err))

})



module.exports = router