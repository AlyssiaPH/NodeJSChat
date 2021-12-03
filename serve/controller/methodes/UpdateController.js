const {servicesCreation} = require('./../../services/service')
const {encrypt} =require('../../javascript/hash')
const {servicesGetter} = require("../../services/service");

async function updateUserController(request, response) {

    try {
        let json = {
            name: request.body.name,
            email: encrypt(request.body.email),
            password: encrypt(request.body.password),
            admin: request.body.admin,
            rooms: request.body.rooms

        }
        let valide = await serviceupdate('/user', json, req, res)
    }catch (exception){
        console.log('erreur : '+exception)
        return(exception)
    }
}


async function updateRoomController(request, response) {

    try {
        let json = {
            name: request.body.name,
            users: request.body.users,
            messages: request.body.messages

        }
        let valide = await serviceupdate('/room', json, req, res)
    }catch (exception){
        console.log('erreur : '+exception)
        return(exception)
    }
}


async function updateMessageController(request, response) {

    try {
        let json = {
            name: request.body.name,
            users: request.body.users,
            messages: request.body.messages

        }
        let valide = await serviceupdate('/message', json, req, res)
    }catch (exception){
        console.log('erreur : '+exception)
        return(exception)
    }
}
export {
    updateRoomController,
    updateMessageController,
    updateUserController

}