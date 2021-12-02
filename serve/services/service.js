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



let modelMessage = mongoose.model('message',
    {
        idroom: String,
        iduser: String,
        content: String,

    }
)
let modelRoom = mongoose.model('room',
    {
        name: String,
        users: Array,
        messages: Array,

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
/**
 * @param: /messages ( POST )
 * @function : CreateMessages
 * this path api server using to call methodes createMessages
 * Receive => messages = {
 *     user : ['test'] ( Array )
 *     content : test@test.com ( String )
 *     room : ['test'] ( Array )
 * }
 */

async function postMessage(json){
    try {
        const data = new modelMessage({

            idroom: json.idroom,
            iduser: json.iduser,
            content: json.content,

        })
        await data.save()
        let returnvalue = 'message' + json.stringify(json) + 'just send  '
        console.log(returnvalue)
        return returnvalue

    }catch (exception){

        return exception
    }





}

async function getMessage(message){
    let data = awai


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
