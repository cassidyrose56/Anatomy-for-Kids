const models = require('../models/data-models.js')

const controller = {};

controller.getUsers = async(req, res, next) => {
    try {
        res.locals.users = [
        {name: 'Eye', purpose: 'Seeing', parts: 'Cornea, Pupil, Iris'},
        {name: 'Ear', purpose: 'Hearing', parts: 'Malleus, Incus, Stapes'},
        ];
        return next();
    }
    catch(err) {
        return next({
            log: `Error occurred in controller.getUsers - ERROR: ${err}`,
            status: 400,
            message: 'Sorry, cannot get users right now!'
        })
    }
}

module.exports = controller;