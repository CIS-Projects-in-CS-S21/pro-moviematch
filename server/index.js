const express = require('express')
const mongoose = require('mongoose')
const passport = require("passport");


const users = require('./routes/users')
const groups = require('./routes/group')
const movies = require('./routes/movie')
const streamservices = require('./routes/streamingservice')
const usergroups = require('./routes/usergroup')
const movielikes = require('./routes/movielike')



const app = express()

app.use(express.json())

app.use('/api/users', users)
app.use('/api/groups', groups)
app.use('/api/movies', movies)
app.use('/api/streaming_services', streamservices)
app.use('/api/user_group', usergroups)
app.use('/api/movie_likes', movielikes)

app.use(passport.initialize());

require("./config/passport") (passport);
require('dotenv').config()

const port = process.env.PORT || 3000
const connect = process.env.CONNECT

mongoose.connect(connect)
    .then(result => {

        app.listen(port, () => console.log(`Server is running on port ${port}`))

    })
    .catch(err => console.log(err))


