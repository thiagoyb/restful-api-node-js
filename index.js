const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const path = require('path');

let app = express();

app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());
app.use(expressValidator());

consign().include('routes').include('utils').into(app);

app.listen(4000, '127.0.0.1', ()=>{
    console.log('Servidor iniciado na porta 4000!');
});
