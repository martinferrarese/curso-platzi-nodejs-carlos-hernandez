const express = require('express');
const response = require('../../network/response');
const indexService = require('../index/index-service');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const mensaje = indexService.saludar();
        response.success(req, res, mensaje, 200);
    } catch (error) {
        console.log(error);
        response.failure(req, res, 'GET - No fue posible ejecutar el pedido', 500);
    }
})
