var express = require('express')

var router = express.Router()

router.get('/', (req,res) => {
    res.send('Homepage!')
})

module.exports = router