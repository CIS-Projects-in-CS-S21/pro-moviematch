const express = require('express')

const Movie = require('../models/Movie')

const router = express.Router()


router.post('/', (req, res) => {

    const movie = new Movie({
        movie_id: req.body.movie_id,
        title: req.body.title,
        description: req.body.description,
        name: req.body.name,
        genre: req.body.genre
    })

    movie.save()
        .then(result => {
            res.send({
                message: 'Movie data created succesfully',
                data: result
            })
        })
        .catch(err => console.log(err))

})
  
module.exports = router