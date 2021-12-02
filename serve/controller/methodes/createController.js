const {servicesCreation} = require('./../../services/service')
const {encrypt} =require('../../javascript/hash')

async function createUserController(request,response){
    try{
        console.log('Creation User wait')
        let json = {
            name: request.body.name,
            email: encrypt(request.body.email),
            password: encrypt(request.body.password),
            admin: request.body.admin,
            rooms : request.body.rooms
        }
        console.log(json)
        let valide = await servicesCreation('/user',json)
        response.json(valide);
        console.log('User Created !')
    }catch (exception){
        response.json(exception);
    }
}

async function createMessageController(request,response){
    try{
        console.log('Creation Message wait')
        let json = {
            iduser: request.body.iduser,
            idroom: request.body.idroom,
            content:request.body.content
        }
        console.log(json)
        let valide = await servicesCreation('/message',json)
        response.json(valide);
        console.log('Message Created !')
    }catch (exception){
        response.json(exception);
    }
}

async function createRoomController(request,response){
    try{
        console.log('Creation Room wait')
        let json = {
            name: request.body.name,
            users: request.body.users,
            messages:request.body.messages
        }
        console.log(json)
        let valide = await servicesCreation('/room',json)
        response.json(valide);
        console.log('Room Created !')
    }catch (exception){
        response.json(exception);
    }
}

module.exports = {
    createUserController,
    createRoomController,
    createMessageController
}