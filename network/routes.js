const express = require('express');
const messageController = require('../components/message/message-controller');
const userController = require('../components/user/user-controller');
const indexController = require('../components/index/index-controller');

const routes = (server) => {
    server.use('/', indexController);
    server.use('/message', messageController);
    server.use('/user', userController);
}

module.exports = routes;