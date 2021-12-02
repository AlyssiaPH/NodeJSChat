const mongoose = require('mongoose')

mongoose.connect('mongodb://groupe6:ekwHcv6ZmRVRNBrSX5w@94.130.108.19/groupe6');

let modelUsers = mongoose.model('user',
    {
        name: String,
        email: String,
        password: String,
        admin: Boolean,
        rooms: Array
    }
)

async function createUser(json) {
    try{
        const data = new modelUsers({
            name: json.name,
            email: json.email,
            password: json.password,
            admin: json.admin,
            rooms : json.rooms
        })
        await data.save()
        let returnValue = 'user : ' + JSON.stringify(json) + ' created !'
        console.log(returnValue)
        return returnValue
    }catch (exception){
        return exception
    }
}

async function getUser(user) {
    let data = await modelUsers.find({
        email: user.email,
    })
    if (data.length !== 1) {
        return -1
    } else {
        return 1
    }
}


module.exports = {
    createUser,
    getUser
}
