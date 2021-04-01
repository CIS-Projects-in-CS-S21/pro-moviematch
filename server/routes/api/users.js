const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

const User = require('../../models/User');

//Checking if user exists with email, registering user if email is not associated with account
router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    //console.log(req.body);
    if (!isValid){
        return res.status(400).json(errors);
    }

    User.findOne({email: req.body.email}).then(user => {
        if (user){
            return res.status(400).json({email: "Account with this email already exists"
        });
        }
        else {    
            const newUser = new User({
                id: req.body.id,
                email: req.body.email,
                password: req.body.password,
                first_name: req.body.first_name,
                last_name: req.body.last_name
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                    .save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
                });
            });
            return res.status(200).json({ "success": "Welcome to MovieMatch," + req.body.first_name});
        }
    });
});

router.post("/login", (req, res) => {

    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid){
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email}).then(user => {
        if (!user){
            return res.status(404).json({ emailnotfound: "Account with associated email not found"});
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch){
                const payload = {
                    id: user.id,
                    first_name: user.first_name
                };

                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 31556926
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
                return res.status(200).json({ success: "Welcome back to MovieMatch," + user.first_name});
            } else {
                return res
                .status(400)
                .json({passwordincorrect: "Incorrect password"});
            }
        });
    });
});

module.exports = router;