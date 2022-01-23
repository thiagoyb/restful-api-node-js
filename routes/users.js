module.exports = app =>{
    app.get('/users', (req, res)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            'name' : 'Fulano Sauro',
            'idade' : 29,
            'id': 1
        });
    });

    app.post('/users',(req, res)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(req.body);
    });
}
