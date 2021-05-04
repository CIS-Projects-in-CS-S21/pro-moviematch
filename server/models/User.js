const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    movie_id: Number,
    group_id: [Number],
    streaming_service: [Number],
    likes: [String]

});

module.exports = mongoose.model('User', userSchema);