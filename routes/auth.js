const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {registerValidation, loginValidation } = require('../validation');



// REGISTER
router.post('/register', async (req, res) => {
    console.log('route/register called')
    // Validate Data before creating new user
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //check ig user is already in DB
    const emailExist = await User.findOne({email: req.body.email});
    if (emailExist)return res.status(400).send('Email already exist');

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    //define User role based on email
    let role;
    if (req.body.email.endsWith("@fhnw.ch")) {
        role = "dozent";
    }
    else {
        role = "student";
    }

    // create new User
    const user = new User ({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
        role: role
    });
    try{
        const savedUser = await user.save();
        res.send({user: user._id });
    }catch(err){
        res.status(400).send(err);
    }
});

//LOGIN
router.post('/login', async (req, res) => {
    console.log('route/login called');
    // Validate Data before login in user
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //check if e-mail exists
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(400).send('Email doesnt exist');

    //check if password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send('Invalid password');

    console.log(user.name + " has logged in")
    // Create assign Token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header('auth-token',token);


    res.send({
        username: user.name,
        email: user.email,
        role: user.role
    })
});

module.exports = router;
