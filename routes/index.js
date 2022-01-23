const express = require('express');

let routes = express.Router();
routes.get('/',(req, res)=>{

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Bem-vindo ao Node!<h1>');
});

module.exports = routes;
