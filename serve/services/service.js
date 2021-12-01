const mongoose = require('mongoose')

mongoose.connect('mongodb://groupe6:ekwHcv6ZmRVRNBrSX5w@94.130.108.19/groupe6');

let modelUsers = mongoose.model('user', {
        name: String,
        email: String,
        password: String,
        admin: Boolean
    }
)
const GETISNULL = 'emailNull'
const GETEXIST = 'emailExist'

async function createUser(user) {
    const data = await modelUsers({
        email: user.email,
        name:user.email,
        password:user.password,
        admin:user.admin
    })
    data.save()
    console.log('user : '+JSON.stringify(user)+' created !')
}

async function getUser(user) {
    let data = await modelUsers.find({
        email: user.email,
        name:user.email,
        password:user.password,
        admin:user.admin
    })
    console.log(data)
}

function postUser(user) {

}



function deleteUser() {

}

module.exports = {
    createUser,
    getUser
}