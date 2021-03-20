const express = require('express')

const UserGroup = require('../models/UserGroup')

const router = express.Router()

router.post('/', (req, res) => {

    const usergroup = new UserGroup({
        id: req.body.id,
        group_id: req.body.group_id,
        users_id: req.body.user_id
    })

    usergroup.save()
        .then(result => {
            res.send({
                message: 'User group data has been created succesfully.',
                data: result
            })
        })
        .catch(err => console.log(err))
})

module.exports = router