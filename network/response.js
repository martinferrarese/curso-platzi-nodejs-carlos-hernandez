exports.success = function(req, res, mensaje, statusCode){
    res.setHeader('Content-type', 'application/json');
    res.status(statusCode).send({
        error: ``,
        body: mensaje
    });
}

exports.failure = function(req, res, mensajeDeError, statusCode){
    res.status(statusCode).send({
        error: `${mensajeDeError}`,
        body: ``
    });
}