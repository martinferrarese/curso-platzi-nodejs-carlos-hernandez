const express = require('express');
const response = require('../../network/response');
const service = require('./chat-service');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        if(!req.body.users || req.body.users.length === 0) {
            response.failure(req, res, `[POST] Chat - Debe contener usuarios`, 400);
        } else {
            const chats = await service.add(req.body.users);
            response.success(req, res, chats, 200);
        }
    } catch (error) {
        response.failure(req, res, `[POST] Chat - ${error} - No se pudo resolver el pedido`, 500);
    }
});

router.get('/', async (req, res) => {
    try {
        const chats = await service.get(req.body.users);
        response.success(req, res, chats, 200);
    } catch (error) {
        response.failure(req, res, `[GET] Chat - ${error} - No se pudo resolver el pedido`, 500);
    }
})

module.exports = router;