const mongoose = require('mongoose')

const GroupSchema = new mongoose.Schema({
    groupid: {type: Number, required: true},
    members: {type: [], required: false},
    title: {type: String, required: true},
    description: String,
})


module.exports = mongoose.model('Group', GroupSchema)