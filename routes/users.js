const express = require('express');

let routes = express.Router();

routes.get('/', (req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        'name' : 'Fulano Sauro',
        'idade' : 29,
        id: 1
    });
});

routes.get('/admin',(req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({});
})

module.exports = routes;
