const bcrypt = require('bcrypt');
require('dotenv').config()
const encoding = 'qsdlgf5fd5gdfgdfg2f2f2f2f2f2s1dg5fs4dg'
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

function encrypt(data){
    return bcrypt.hashSync(data, saltRounds);
}

function decrypt(data){
}

function checkUser(tab,email,pass){
    let user = {}
    for (let i = 0; i < tab.length; i++) {
        bcrypt.compare(pass, tab[i].password, function(err, result) {
            if(result === true && tab[i].email === email){
                //console.log(tab[i])
                return tab[i]
            }
        });
        }
    return user
}

module.exports = {
    encrypt,
    decrypt,
    checkUser
}
