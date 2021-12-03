const CryptoJS = require("crypto-js");
require('dotenv').config()
const encoding = 'qsdlgf5fd5gdfgdfg2f2f2f2f2f2s1dg5fs4dg'


function encrypt(data){
    return CryptoJS.AES.encrypt(data, encoding).toString();
}

function decrypt(data){
    let bytes  = CryptoJS.AES.decrypt(data, encoding);
    return  bytes.toString(CryptoJS.enc.Utf8);
}

function checkUser(tab,email,pass){
    let user = {}
    for (let i = 0; i < tab.length; i++) {
        console.log(tab[i].password, encrypt(pass).toString(CryptoJS.enc.Utf8))
        if(tab[i].email === email && tab[i].password === encrypt(encrypt(pass))){
            user = tab[i]
            console.log("Trouuvéé")
        }
    }
    console.log(user)
    return user
}

module.exports = {
    encrypt,
    decrypt,
    checkUser
}
