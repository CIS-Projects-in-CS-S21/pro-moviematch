const express = require('express')

const MovieLike = require('../models/MovieLike')

const router = express.Router()

router.post('/', (req, res) => {

    const movielike = new MovieLike({
        id: req.body.id,
        user_id: req.body.user_id,
        movie_id: req.body.movie_id
    })

    movielike.save()
        .then(result => {
            res.send({
                message: 'Movie like list data has been created succesfully.',
                data: result
            })
        })
        .catch(err => console.log(err))
})

module.exports = router