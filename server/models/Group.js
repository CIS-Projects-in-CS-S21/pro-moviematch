const mongoose = require('mongoose')

const GroupSchema = new mongoose.Schema({
    group_id: {type: Number, required: true},
    title: {type: String, required: true},
    description: String,
})


module.exports = mongoose.model('Group', GroupSchema)