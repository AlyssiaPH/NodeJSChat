const {decrypt,encrypt}=require('./../../javascript/hash')

async function getterUserService(user,modelUsers) {
    let data = await modelUsers.findById(user.query.id)
    if (data === undefined) {
        return -1
    } else {
        return data
    }
}

async function getterRoomService(name,modelRoom) {
    let data = await modelRoom.find({
        name: name,
    })
    if (data.length !== 1) {
        return -1
    } else {
        return 1
    }
}

async function getterAllRoomService(name,modelRoom) {
    let data = await modelRoom.find({})
    if (data.length < 1) {
        return -1
    } else {
        return data
    }
}
async function getterAllRoomMessagesService(json,modelMessage) {
    let data = await modelMessage.find({
        idroom: json.query.idRoom,
    })
    if (data.length < 1) {
        return -1
    } else {
        return data
    }
}

async function getterMessageService(json,modelMessage) {
    let data = await modelMessage.find({
        name: json.name,
        users: json.users,
        messages: json.messages,
    })
    if (data.length !== 1) {
        return -1
    } else {
        return 1
    }
}

module.exports = {
    getterRoomService,
    getterAllRoomService,
    getterAllRoomMessagesService,
    getterMessageService,
    getterUserService
}