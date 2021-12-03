const {encrypt} = require("../../javascript/hash");
const {servicesDelete} = require("../../services/service");

async function deleteUserController(req,res){

    try {
       let json = {
           name: request.body.name,
           email: encrypt(request.body.email),
           password: encrypt(request.body.password),
           admin: request.body.admin,
           rooms : request.body.rooms
       }
       let valide = await servicesDelete('/user',json,req,res)

    }catch (exception){
        console.log('erreur : '+exception)
        return(exception)
    }
}

async function deleteRoomController(req,res){

    try {
        let json = {
            name: request.body.name,
            users: request.body.users,
            messages: request.body.messages
        }
        let valide = await servicesDelete('/user',json,req,res)

    }catch (exception){
        console.log('erreur : '+exception)
        return(exception)
    }
}

async function deleteMessageController(req,res){

    try {
        let json = {
            name: request.body.name,
            users: request.body.users,
            messages: request.body.messages
        }
        let valide = await servicesDelete('/user',json,req,res)

    }catch (exception){
        console.log('erreur : '+exception)
        return(exception)
    }
}

module.exports = {
    deleteUserController,
    deleteRoomController,
    deleteMessageController

}
