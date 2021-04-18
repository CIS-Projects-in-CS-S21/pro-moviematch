const express = require('express')

const Group = require('../models/Group')

const router = express.Router()

router.post('/', (req, res) => {

    const group = new Group({
        group_id: req.body.group_id,
        title: req.body.title,
        likes: req.body.likes,
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

//Gets all members that belong to said group by id
router.get('/:id/members', async (req, res) => {
    const {id} = req.params
    
    var members;
   
    try {
        members = await Group.findById(req.params.id);
        
    } catch (err) {

        res.json({message: "Could not find group!"})

    }

    var member_ids = members.members
    
    res.status(200).json(member_ids)
})

module.exports = router