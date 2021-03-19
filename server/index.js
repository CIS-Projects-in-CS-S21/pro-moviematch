const express = require('express')
const mongoose = require('mongoose')


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

require('dotenv').config()

const port = process.env.PORT || 3000

mongoose.connect('mongodb+srv://moviematch:moviematch123@cluster0.ewgqp.mongodb.net/movie_match?retryWrites=true&w=majority')
    .then(result => {

        app.listen(port, () => console.log(`Server is running on port ${port}`))

    })
    .catch(err => console.log(err))


