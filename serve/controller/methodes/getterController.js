const {servicesGetter} = require('../../services/service')

async function getUserController(request, response) {
    try {
        let userGetting = await servicesGetter('/user',request)
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
        let userGetting = await servicesGetter('/room',request)
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

module.exports = {
    getMessageController,
    getRoomController,
    getUserController
}
