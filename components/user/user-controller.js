const express = require('express');
const response = require('../../network/response');
const service = require('./user-service');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const newUser = await service.add(req.body.name);
        response.success(req, res, newUser, 200);
    } catch (error) {
        response.failure(req, res, `[POST] Message - ${error} - No se pudo resolver el pedido`, 500);
    }
});

module.exports = router;