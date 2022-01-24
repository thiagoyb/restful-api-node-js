const Nedb = require('nedb');
let db = new Nedb({
    filename: 'users.db',
    autoload: true
});

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
        res.setHeader('Content-Type', 'application/json');

        db.insert(req.body, (err, user)=>{
            if(err){
                console.error('Error: ', err);
                res.status(400).json({ error: err});
            } else{
                res.status(200).json(user);
            }
        });
    });
}
