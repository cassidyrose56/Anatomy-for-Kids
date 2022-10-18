const express = require('express');

const controller = {};

controller.getUsers = async(req, res, next) => {
    try {
        res.locals.users = [
        {username: 'Cassidy', age: 22,},
        {username: 'Brian', age: 24,}
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