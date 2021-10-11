const express = require('express');
const messageController = require('../components/message/message-controller');

const routes = (server) => {
    server.use('/message', messageController);
}

module.exports = routes;