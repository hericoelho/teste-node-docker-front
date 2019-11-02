const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;


const Schema = mongoose.Schema;
const UserSchema = new Schema({
    nome: {
        type: String,
        trim: true,  
        required: true
    },
    cpf: {
        type: String,
        trim: true,  
        required: true,
        minlength:[11,"Informe um CPF valido"],
        maxlength:[11,"Informe um CPF valido"],
        unique: true
    }, 
    email: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    data_de_nascimento: { 
        type: Date        
    },
    data_de_cadastro: { 
        type: Date, 
        default: Date.now 
    }
});

// gerando o salt antes de salvar o usuario 
UserSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});
module.exports = mongoose.model('User', UserSchema);