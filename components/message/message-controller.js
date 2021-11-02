const express = require('express');
const response = require('../../network/response');
const service = require('./message-service');

const router = express.Router();

router.get('/', async (req, res) => {
    const filterMessage = req.query.user || null;
    try {
        const messageList = await service.getMessages(filterMessage);
        response.success(req, res, messageList, 200);
    } catch (error) {
        console.log(error);
        response.failure(req, res, `[GET] Message - ${error} - No se pudieron obtener los mensajes`, 500);
    }
})

router.post('/', async (req, res) => {
    try {
        const fullMessage = await service.addMessage(req.body.user, req.body.message);
        response.success(req, res, fullMessage, 200);
    }catch(error) {
        console.log(error);
        response.failure(req, res, `[POST] Message - ${error} - No se pudo resolver el pedido`, 500);
    }
});

router.patch('/:id', async (req, res) => {
    try{
        const updatedMessage = await service.updateMessage(req.params.id, req.body.message);
        response.success(req, res, updatedMessage, 200);
    } catch (error) {
        console.log(error);
        response.failure(req, res, `[PATCH] Message - ${error} - No se pudo actualizar el dato`, 500);
    }
});

module.exports = router;