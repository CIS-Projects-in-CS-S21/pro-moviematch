const mongoose = require('mongoose')

const MovieLikeSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    user_id: {type: Number, required: true},
    movie_id: [Number]
})


module.exports = mongoose.model('MovieLike', MovieLikeSchema)