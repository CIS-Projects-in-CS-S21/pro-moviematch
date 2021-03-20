const mongoose = require('mongoose')

const UserGroupSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    group_id: {type: Number, required: true},
    users_id: {type: [Number], required: true},
})


module.exports = mongoose.model('UserGroup', UserGroupSchema)