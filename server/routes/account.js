/* Node for account
   Creates, updates, read and delete users
*/


var express = require('express')

var router = express.Router()

router.get('/', (req,res) => {
    res.send('Account Page!')
})

module.exports = router