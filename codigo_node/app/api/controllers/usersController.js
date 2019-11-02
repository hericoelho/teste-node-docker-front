const userModel = require('../models/usersModel');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');
module.exports = {
 create: function(req, res, next) {
    var cpfSomenteNumeros;  
    if(req.body.cpf){
        cpfSomenteNumeros= req.body.cpf.replace(/[^\d]+/g,'');
    }  
  userModel.create({ 
    name: req.body.name, 
    cpf:cpfSomenteNumeros, 
    email: req.body.email, 
    password: req.body.password, 
    data_de_nascimento: req.body.data_de_nascimento, 
    data_de_cadastro: req.body.data_de_cadastro, 
    }, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "success", message: "Usuario adicionado com sucesso!!!", data: null});
      
    });
 },
authenticate: function(req, res, next) {
  userModel.findOne({email:req.body.email}, function(err, userInfo){
     if (err) {
      next(err);
     } else {
if(bcrypt.compareSync(req.body.password, userInfo.password)) {
const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), { expiresIn: '1h' });
res.json({status:"success", message: "Usuario autenticado com sucesso!!!", data:{user: userInfo, token:token}});
}else{
res.json({status:"error", message: "Não foi possivel autenticar o usuario. Por favor verifique os dados de email e password!!!", data:null});
}
     }
    });
 },
}