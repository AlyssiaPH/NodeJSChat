const mongoose = require('mongoose')

mongoose.connect('mongodb://groupe6:ekwHcv6ZmRVRNBrSX5w@94.130.108.19/groupe6');

let modelUsers = mongoose.model('user', {
        name: String,
        email: String,
        pass: String,
        admin: Boolean
    }
)
const GETISNULL = 'emailNull'
const GETEXIST = 'emailExist'

async function createUser(user) {
    let data = await modelUsers.find({
        email: user.email,
        name:user.email,
        password:user.password,
        admin:user.admin
    })
    return data
}

function postUser(user) {

}

function getUser() {

}

function deleteUser() {

}

module.exports = {
    createUser
}