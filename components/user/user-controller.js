const express = require('express');
const response = require('../../network/response');
const service = require('./user-service');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await service.get(req.query.name);
        response.success(req, res, users, 200);
    } catch (error) {
        response.failure(req, res, `[POST] User - ${error} - No se pudo resolver el pedido`, 500);
    }
});

router.post('/', async (req, res) => {
    try {
        const newUser = await service.add(req.body.name);
        response.success(req, res, newUser, 200);
    } catch (error) {
        response.failure(req, res, `[POST] User - ${error} - No se pudo resolver el pedido`, 500);
    }
});

module.exports = router;