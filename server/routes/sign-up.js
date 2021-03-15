var express = require('express')

var router = express.Router()



router.get('/', (req,res) => {
    res.send('Please sign in')
})

module.exports = router

