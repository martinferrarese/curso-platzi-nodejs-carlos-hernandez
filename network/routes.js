const express = require('express');
const messageController = require('../components/message/message-controller');
const userController = require('../components/user/user-controller');
const indexController = require('../components/index/index-controller');
const chatController = require('../components/chat/chat-controller');

const routes = (server) => {
    server.use('/', indexController);
    server.use('/message', messageController);
    server.use('/user', userController);
    server.use('/chat', chatController);
}

module.exports = routes;