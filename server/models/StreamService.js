const mongoose = require('mongoose')

const StreamServiceSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    service_name: String
})


module.exports = mongoose.model('StreamService', StreamServiceSchema)