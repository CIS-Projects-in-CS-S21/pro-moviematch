const express = require('express')

const User = require('../models/User')
const Movie = require('../models/Movie')
const MovieLike = require('../models/MovieLike')

const router = express.Router()

router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        res.send({data: user})
    } catch (err) {
        res.json({message: "Could not find user!"})
    }

})

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

// get all the content liked for a user
router.get('/:userId/like', async (req, res) => {
    const { userId } = req.params

    // get user user
    var user;
    try {
        user = await User.findById(req.params.userId).populate('likes');
    } catch (err) {
        res.json({message: "Could not find user!"})
    }

    // get content
    var content_ids = user.likes.map(content => content.movie_id)
    const content = await Movie.find({ '_id': { $in: content_ids }});

    res.status(200).json(content)
})

// POST a new like
router.post('/:userId/like', async (req, res) => {

    const {userId} = req.params;
    
    // get user
    var user;
    try {
        user = await User.findById(req.params.userId).populate('likes');
    } catch (err) {
        res.json({message: "Could not find user!"})
    }

    // get content_ids to verify user isn't creating a duplicate like
    var content_ids = user.likes.map(content => content.movie_id)

    if(content_ids.includes(req.body.movie_id)) {
        
        res.status(404).json({message: "This content has already been liked. Cannot like again."})

    } else {
        // create new liked_content object
        const likedContent = new MovieLike(req.body)

        // asign the liked_content to the current user
        likedContent.user = user

        // save the liked_content
        await likedContent.save()

        // // add liked_content to the users liked array
        user.likes.push(likedContent)

        // //save the user
        await user.save()
        res.status(201).json(likedContent)
    }
})



module.exports = router