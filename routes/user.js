const errors = require('restify-errors');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const auth = require('../auth'); 
const jwt = require('jsonwebtoken'); 
const config = require('../config')


module.exports = server => {

    server.post('/register', async (req, res, next) => {
        
        console.log("Invoking Post method")
        if(!req.is('application/json')){
            return next(new errors.InvalidContentError('Invalid JSON'));
        }

        const { email, password, displayName } = req.body;

        const newUser = new User({
            email, password,displayName
        });

        bcrypt.genSalt(10, (err, salt) => {
           bcrypt.hash(newUser.password, salt, (err, hash) => {
               newUser.password = hash;
           })
        });

        try {
            console.log("saving data")

            const resp = await newUser.save();
            console.log("save success")

            res.send(201);
            next();
        } catch (error) {
            console.log("error saving data")
            console.log(error);
            return next(errors.InternalError(error));
        }        
    });

    server.post('/auth', async( req, res, next) => {
 
        const { email, password } = req.body; 

        try {
            console.log(email, password)
            const user = await auth.authenticate(email, password); 
            console.log(user)
            const token = jwt.sign(user.toJSON(), config.JWT_SECRET, {
                expiresIn: '15m'
            });

            const { iat, exp} = jwt.decode(token)

            res.send({iat, exp, token})
            next()
        } catch (err) {
            return next(new errors.UnauthorizedError(err))
        }
    })
};

