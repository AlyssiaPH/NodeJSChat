const jwt = require('jsonwebtoken')
require('dotenv').config();



function generateAccessToken(data){
    return jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1800s'});
}

module.exports ={
    generateAccessToken
}