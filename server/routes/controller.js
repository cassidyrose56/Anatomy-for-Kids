const models = require('../models/data-models.js')

const controller = {};

controller.printParts = async(req, res, next) => {
    try {
        const partsData = await models.Body.find({});
        
        res.locals.partsData = partsData;
        // console.log('controller.js', res.locals.partsData)
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

controller.createParts = async(req, res, next) => {
    try {
        // console.log(req.body.name)
        const partsData = await models.Body.create({
            name: req.body.name,
            classification: req.body.classification,
            purpose: req.body.purpose,
            parts:  req.body.parts,
            funFact: req.body.funFact
            });
        // console.log(partsData)
        // partsData.save((err) => {
        //     if (err) return handleError(err);
        // });
        res.locals.partsData = partsData;
        // console.log(res.locals.partsData)
        // console.log(req.body)
        return next();
    }
    catch(err) {
        return next({
            log: `Error occurred in controller.createParts - ERROR: ${err}`,
            status: 400,
            message: 'Sorry, cannot create parts right now!'
        })
    }
}

controller.deleteParts = async(req, res, next) => {
    try {
        console.log(req.body)
        await models.Body.findOneAndDelete({name: req.body})
        res.locals.deleted = 'deleted!'
        return next();
    }
    catch(err) {
        return next({
            log: `Error occurred in controller.deleteParts - ERROR: ${err}`,
            status: 400,
            message: 'Sorry, cannot delete parts right now!'
        })
    }
}

module.exports = controller;