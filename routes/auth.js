const router = require('express').Router();
const userModel = require('../model/user');

const joi = require('joi');

const schema = {
    email: joi.string().min(6).required(),
    password: joi.string().min(6).required()
}

router.post('/register', async (req, res) => {

    const { error } = joi.validate(req.body, schema);
    if(error) return res.status(400).send(error.details[0].message);

    const user = new User({
        email: req.body.email,
        password: req.body.password
    })

    try {
        const savedUser = await user.save
        res.send(savedUser)
    } catch (error) {
        res.status(400).send(err)
    }
})