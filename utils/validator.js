module.exports = {

    user:(app, req, res)=>{
        req.assert('name', 'O nome é obrigatório.').notEmpty();
        req.assert('password', 'A senha é obrigatória e deve ter no min 4 digitos').notEmpty().isLength({min:5});
        req.assert('email', 'O Email está inválido.').notEmpty().isEmail();

        let errors = req.validationErrors();
        if(errors){
            app.utils.error.send(errors, req, res);
            return false;
        } else{
            return true;
        }
    }
};