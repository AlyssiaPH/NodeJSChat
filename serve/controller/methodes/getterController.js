const {servicesGetter} = require('../../services/service')

async function getUserController(request, response) {
    try {
        let userGetting = await servicesGetter('/user',request)
        console.log(userGetting)
        if (userGetting === undefined) {
            response.json({
                result: null,
                error: 'This user doesn\'t exist'
            })
        } else {
            response.json({
                result: userGetting,
                error: -1
            })
        }
    } catch (exception) {
        response.json({
            result: null,
            error: 'This user doesn\'t exist'
        })
    }
}

async function getMessageController(request, response) {
    try {
        let userGetting = await servicesGetter('/message',request)
        if (userGetting.length < 1) {
            response.json({
                result: null,
                error: 'This user doesn\'t exist'
            })
        } else {
            response.json({
                result: userGetting[0],
                error: -1
            })
        }
    } catch (exception) {
        response.json({
            result: null,
            error: 'This user doesn\'t exist'
        })
    }
}

async function getRoomController(request, response) {
    try {
        let roomGetting = await servicesGetter('/room',request)
        if (roomGetting.length < 1) {
            response.json({
                result: null,
                error: 'This room doesn\'t exist'
            })
        } else {
            response.json({
                result: roomGetting[0],
                error: -1
            })
        }
    } catch (exception) {
        response.json({
            result: null,
            error: 'This room doesn\'t exist'
        })
    }
}
async function getAllRoomController(request, response) {
    try {
        let roomGetting = await servicesGetter('/allrooms',request)
        if (roomGetting.length < 1) {
            response.json({
                result: null,
                error: 'No room find'
            })
        } else {
            response.json({
                result: roomGetting,
                error: -1
            })
            return response
        }
    } catch (exception) {
        response.json({
            result: null,
            error: 'No room find'
        })
    }
}

async function getAllRoomMessagesController(request, response) {
    try {
        let messagesGetting = await servicesGetter('/allroommessages',request)
        if (messagesGetting.length < 1) {
            response.json({
                result: null,
                error: 'No room find'
            })
        } else {
            response.json({
                result: messagesGetting,
                error: -1
            })
            return response
        }
    } catch (exception) {
        response.json({
            result: null,
            error: 'No room find'
        })
    }
}

module.exports = {
    getMessageController,
    getRoomController,
    getAllRoomController,
    getAllRoomMessagesController,
    getUserController
}
