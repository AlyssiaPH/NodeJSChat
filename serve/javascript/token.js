const jwt = require('jsonwebtoken')
require('dotenv').config()

function generateToken(data){
    return jwt.sign(data,process.env.ACCESS_TOKEN,{expiresIn: '1800s'})
}

const test = {test:'test'}
const accessToken = generateToken(test)
console.log(accessToken)
