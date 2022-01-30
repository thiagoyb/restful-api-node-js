const Nedb = require('nedb');
let db = new Nedb({
    filename: 'users.db',
    autoload: true
});

module.exports = app =>{
    let route = app.route('/users');

    route.get((req, res)=>{
        res.setHeader('Content-Type', 'application/json');

        db.find({}).sort({ name: 1 }).exec((err, users)=>{
            if(err){
                app.utils.error.send(err, req, res);
            } else{
                res.status(200).json(users);
            }
        });
    });

    route.post((req, res)=>{
        res.setHeader('Content-Type', 'application/json');

        db.insert(req.body, (err, user)=>{
            if(err){
                app.utils.error.send(err, req, res);
            } else{
                console.info('Cadastrado com Sucesso');
                res.status(200).json(user);
            }
        });
    });

    let routeId = app.route('/users/:id');
    routeId.get((req,res)=>{
        res.setHeader('Content-Type', 'application/json');

        db.findOne({_id:req.params.id}).exec((err, user)=>{
            if(err){
                app.utils.error.send(err, req, res);
            } else{
                res.status(200).json(user);
            }
        });
    });

    routeId.put((req,res)=>{
        res.setHeader('Content-Type', 'application/json');

        db.update({ _id : req.params.id }, req.body, err=>{
            if(err){
                app.utils.error.send(err, req, res);
            } else{
                console.info('Alterado com sucesso!');
                res.status(200).json(Object.assign(req.params, req.body));
            }
        });
    });

    routeId.delete((req,res)=>{
        res.setHeader('Content-Type', 'application/json');

        db.remove({ _id : req.params.id }, {}, err=>{
            if(err){
                app.utils.error.send(err, req, res);
            } else{
                console.info('Alterado com sucesso!');
                res.status(200).json(req.params);
            }
        });
    });
}
