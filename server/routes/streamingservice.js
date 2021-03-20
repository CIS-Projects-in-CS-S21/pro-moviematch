const express = require('express')

const StreamService = require('../models/StreamService')

const router = express.Router()

router.post('/', (req, res) => {

    const streamservice = new StreamService({
        id: req.body.id,
        service_name: req.body.service_name
    })

    streamservice.save()
        .then(result => {
            res.send({
                message: 'Streaming service data has been created succesfully.',
                data: result
            })
        })
        .catch(err => console.log(err))
})

module.exports = router