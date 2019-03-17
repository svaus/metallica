
const errors = require('restify-errors');
const Mettalica = require('../models/metallica');


module.exports = server => {

    server.get('/metallicas', async (req, res, next) => {
        
        try {
            const mettalicas = await Mettalica.find({});
            res.send(mettalicas);
            next();
        } catch (error) {
            return next(errors.InvalidContentError(error));
        }        
    });

    server.post('/metallicas', async (req, res, next) => {
        
        console.log("Invoking Post method")
        if(!req.is('application/json')){
            return next(new errors.InvalidContentError('Invalid JSON'));
        }

        const { tradeDate, commodity, side, quantity, price, counterParty, location } = req.body;

        const mettalica = new Mettalica({
            tradeDate, commodity, side, quantity, price, counterParty, location
        });

        try {
            console.log("saving data")
            const newMettalicas = await mettalica.save();
            console.log("save success")

            res.send(201);
            next();
        } catch (error) {
            console.log("error saving data")
            console.log(error);
            return next(errors.InternalError(error));
        }        
    });
};

