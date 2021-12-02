const {encrypt} = require("./../../javascript/hash");

async function createUserService(json, modelUsers) {
    try{
        const data = new modelUsers({
            name: json.name,
            email: encrypt(json.email),
            password: encrypt(json.password),
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
async function createMessageService(json,modelMessage){
    try {
        const data = new modelMessage({
            idroom: json.idroom,
            iduser: json.iduser,
            content: encrypt(json.content),
        })
        await data.save()
        let returnvalue = 'message' + json.stringify(json) + 'just send  '
        console.log(returnvalue)
        return returnvalue
    }catch (exception){
        return exception
    }
}

/**
 * @param: /room ( POST )
 * @function : CreateMessages
 * this path api server using to call methodes createRoom
 * Receive => room = {
 *     name : ['test'] ( String )
 *     users : ['test'] ( Array )
 *     messages : ['test'] ( Array )
 * }
 */
async function  createRoomService(json,modelRoom){
    try {
        const data = new modelRoom({
            name: json.name,
            users: json.users,
            messages: json.messages,
        })
        await data.save()
        let returnvalue = 'message' + json.stringify(json) + 'just send  '
        console.log(returnvalue)
        return returnvalue
    }catch (exception){
        return exception
    }
}

module.exports = {
    createRoomService,
    createMessageService,
    createUserService
}