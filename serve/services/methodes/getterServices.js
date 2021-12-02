const {decrypt,encrypt}=require('./../../javascript/hash')

async function getterUserService(user,modelUsers) {
    let data = await modelUsers.find({
        email: encrypt(user.query.email),
    })
    console.log('wait search : '+data.query.email)
    if (data.length !== 1) {
        return -1
    } else {
        return 1
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
    getterMessageService,
    getterUserService
}