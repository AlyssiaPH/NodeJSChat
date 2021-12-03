const {encrypt} = require("./../../javascript/hash");

async function deleteMessageService (json, modelUsers,req,res){
    try{
        const data = new modelMessage({
            user: request.body.user,
            room: request.body.room,
            content:request.body.content

        })
        await data.save()
        let returnvalue = 'message' + JSON.stringify(json) + 'has been deleted  '
        console.log(returnvalue)
        res.json(JSON.stringify(json))
    }catch (exception){
        console.log('error : '+exception)
        res.json(exception)
    }
}


async function deleteUserService (json, modelUsers,req,res){
    try{
        console.log('Delete User : ')
        console.log(request)
        let json = {
            name: request.body.name,
            email: request.body.email,
            password: request.body.password,
            admin: request.body.admin,
            rooms : request.body.rooms
        }
        console.log(json)
        let valide = await deleteUserSer(json).delete
        response.json(valide)
    }catch (exception){
        response.json(exception)
    }
}



async function deleteRoomService (json, modelUsers,req,res){
    try {
        console.log('delete room :')
        console.log(request)
        let json = {
            name: request.body.name,
            users: request.body.users,
            messages: request.body.messages
        }
        console.log(json)
        let valide = await deleteRoom(json)
        response.json(valide)
    }catch (exception){
        response.json(exception)
    }
}
module.exports = {
    deleteMessageService,
    deleteUserService,
    deleteRoomService
}
