const express = require('express');
const response = require('../../network/response');
const service = require('./message-service');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const messageList = await service.getMessages(req.body.chat, req.body.user);
        response.success(req, res, messageList, 200);
    } catch (error) {
        console.log(error);
        response.failure(req, res, `[GET] Message - ${error} - No se pudieron obtener los mensajes`, 500);
    }
})

router.post('/', async (req, res) => {
    try {
        const fullMessage = await service.addMessage(req.body.chat, req.body.user, req.body.message);
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

router.delete('/:id', async (req, res) => {
    try{
        await service.deleteMessage(req.params.id)
        response.success(req, res, `El mensaje con id ${req.params.id} fue eliminado con éxito`, 200);
    } catch (error) {
        console.log(error);
        response.failure(req, res, `[DELETE] Message - ${error} - No se pudo eliminar el mensaje`, 500);
    }
});

module.exports = router;