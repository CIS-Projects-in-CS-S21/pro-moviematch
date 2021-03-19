const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    movie_id: {type: Number, required: true},
    title: {type: String, required: true},
    description: String,
    name: String,
    genre: String
})


module.exports = mongoose.model('Movie', MovieSchema)