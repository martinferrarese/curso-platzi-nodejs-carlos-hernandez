const express = require('express');
const response = require('../../network/response');
const service = require('./message-service');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const fullMessage = await service.addMessage(req.body.user, req.body.message);
        response.success(req, res, fullMessage, 200);
    }catch(error) {
        console.log(error);
        response.failure(req, res, `[POST] Message - ${error} - No se pudo resolver el pedido`, 400);
    }
});

module.exports = router;