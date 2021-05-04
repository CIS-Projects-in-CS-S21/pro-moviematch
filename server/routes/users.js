const express = require('express')

const User = require('../models/User')
const Movie = require('../models/Movie')
const MovieLike = require('../models/MovieLike')
const { useReducer } = require('react')
const bcrypt = require('bcryptjs');

const router = express.Router()

//Finds user by email and sends user first name stored in DB
router.get('/:email/Name', async (req, res) => {
    try {
        const user = await User.findOne({"email": req.params.email});
        res.send({firstName: user.first_name, lastName: user.last_name})
    } catch (err) {
        res.json({message: "Could not find user"})
    }
})

router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.UserId);
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
        user = await User.findById(req.params.userId);
    } catch (err) {
        res.json({message: "Could not find user!"})
    }

    // get content
    var content_ids = user.likes

    res.status(200).json(content_ids)
})

// POST a new like
router.post('/:userId/like', async (req, res) => {

    const {userId} = req.params;
    
    // get user
    var user;
    try {
        user = await User.findById(req.params.userId);
    } catch (err) {
        res.json({message: "Could not find user!"})
    }

    // check that a user is not trying to double like content, if not add it to their likes array
    if(user.likes.includes(req.body.movie_id)) {
        res.status(404).json({message: "This content has already been liked. Cannot like again."})
    } else {
        user.likes.push(req.body.movie_id)
        await user.save()
        res.status(201).json(user.likes)
    }
})
        
router.post('/:email/changePassword', async (req, res) => {
    const currPassword = req.body.password; 
    const newPassword = req.body.newPassword;
    var user; 
    try {
        user = await User.findOne({"email": req.params.email});

    } catch (err) {
         res.json({message: "Could not find user"})
    }
    bcrypt.compare(currPassword, user.password).then(isMatch => {
        if (isMatch){
            user.password = req.body.newPassword;
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(user.password, salt, (err, hash) => {
                    if (err) throw err;
                    user.password = hash;
                    user
                    .save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
                });
            })
            res.status(201).json({success: "User password successfully changed!"})
        } else {
            return res
            .status(400)
            .json({passwordincorrect: "Incorrect password"});
        }
    });

    
    })  
    
  
router.get('/:email/userId', async (req, res) => {
    try {
        const user = await User.findOne({"email": req.params.email});
        res.send({userId: user._id})
    } catch (err) {
        res.json({message: "Could not find user"})
    }
})




module.exports = router