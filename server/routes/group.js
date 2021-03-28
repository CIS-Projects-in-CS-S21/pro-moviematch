const express = require('express')

const Group = require('../models/Group')

const router = express.Router()

router.post('/', (req, res) => {

    const group = new Group({
        group_id: req.body.group_id,
        title: req.body.title,
        description: req.body.description
    })

    group.save()
        .then(result => {
            res.send({
                message: 'Group data has been created succesfully.',
                data: result
            })
        })
        .catch(err => console.log(err))
})

module.exports = router