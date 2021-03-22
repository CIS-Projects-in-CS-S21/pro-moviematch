const express = require('express')

const Movie = require('../models/Movie')

const router = express.Router()


router.post('/', async (req, res) => {

    // check that movies does not alreay exist
    const movie = await Movie.findOne({movie_id:req.body.movie_id});
    if (movie) return res.status(400).send("movie already exists.");

    const new_movie = new Movie({
        movie_id: req.body.movie_id,
        title: req.body.title,
        description: req.body.description,
        name: req.body.name,
        genre: req.body.genre
    })

    await new_movie.save()
        .then(result => {
            res.send({
                message: 'Movie data created succesfully',
                data: result
            })
        })
        .catch(err => console.log(err))

})
  
module.exports = router