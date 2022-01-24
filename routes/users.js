const Nedb = require('nedb');
let db = new Nedb({
    filename: 'users.db',
    autoload: true
});

module.exports = app =>{
    app.get('/users', (req, res)=>{
        res.setHeader('Content-Type', 'application/json');

        db.find({}).sort({ name: 1 }).exec((err, users)=>{
            if(err){
                console.error('Error: ', err);
                res.status(400).json({ error: err});
            } else{
                console.info('Cadastrado com Sucesso');
                res.status(200).json(users);
            }
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
