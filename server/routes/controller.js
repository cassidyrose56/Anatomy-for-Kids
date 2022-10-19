const models = require('../models/data-models.js')

const controller = {};

controller.createParts = async(req, res, next) => {
    try {
        const partsData = new models.Body({name: 'Eyes', classification: 'Organs', purpose: 'Seeing',
        parts: ['Cornea', 'Pupil', 'Iris']});
        partsData.save((err) => {
            if (err) return handleError(err);
        });
        res.locals.partsData = partsData;
        console.log('controller.js', res.locals.partsData)
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