const jwt = require('jsonwebtoken')
require('dotenv').config()

function generateToken(data){
    return jwt.sign(data,process.env.ACCESS_TOKEN,{expiresIn: '1800s'})
}

module.exports = {
    generateToken
}
