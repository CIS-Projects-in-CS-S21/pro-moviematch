const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MovieLikeSchema = new mongoose.Schema({
	user_id: { type: Schema.Types.ObjectId, ref: 'User'},
    movie_id: { type: Schema.Types.ObjectId, ref: 'Movie'}
})


module.exports = mongoose.model('MovieLike', MovieLikeSchema)