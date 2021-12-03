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

function checkUser(data,userpass){

    let crypte = decrypt(userpass)

    if(data === crypte){
        return true
    }else{
        return false
    }
}

module.exports = {
    encrypt,
    decrypt,
    checkUser
}
