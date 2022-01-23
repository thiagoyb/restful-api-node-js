const express = require('express');

let app = express();

app.get('/',(req, res)=>{
    console.log('URL: ', req.url);
    console.log('METHOD: ', req.method);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Bem-vindo!<h1>');
});
app.get('/users', (req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        'name' : 'Fulano Sauro',
        'idade' : 29,
        id: 1
    });
});

app.listen(3000, '127.0.0.1', ()=>{
    console.log('Servidor iniciado na porta 3000!');
});
