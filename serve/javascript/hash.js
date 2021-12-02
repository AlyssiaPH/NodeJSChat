const CryptoJS = require("crypto-js");
require('dotenv').config()

function encrypt(data){
    return CryptoJS.AES.encrypt(data, process.env.CRYPT).toString();
}

function decrypt(data){
    let bytes  = CryptoJS.AES.decrypt(data, process.env.CRYPT);
    console.log(bytes)
    return  bytes.toString(CryptoJS.enc.Utf8);
}


module.exports = {
    encrypt,
    decrypt
}