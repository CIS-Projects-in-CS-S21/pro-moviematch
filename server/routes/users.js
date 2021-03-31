const express = require('express')

const User = require('../models/User')
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

router.post('/:userId/like', async (req, res) => {
    const {userId} = req.params;

    // TODO
    // check that movie has not already been seen

    // create new liked_content object
    const likedContent = new MovieLike(req.body)

    // get user user
    var user;
    try {
        user = await User.findById(req.params.userId);
    } catch (err) {
        res.json({message: "Could not find user!"})
    }

    // asign the liked_content to the current user
    likedContent.user = user

    // save the liked_content
    await likedContent.save()

    // // add liked_content to the users liked array
    // console.log(likedContent._id)
    user.likes.push(likedContent)

    // //save the user
    await user.save()
    res.status(201).json(likedContent)
})



module.exports = router