module.exports = app =>{
    app.get('/users', (req, res)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            'name' : 'Fulano Sauro',
            'idade' : 29,
            id: 1
        });
    });
    
    app.get('/users/admin',(req, res)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({});
    })
}
