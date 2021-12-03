async function updateUserServices (json, modelUsers,req,res){
    try{
        console.log('update User : ')
        console.log(request)
        let json = {
            name: request.body.name,
            users: request.body.users,
            messages: request.body.messages
        }
        console.log(json)
        let valide = await deleteUserSer(json).updates
        response.json(valide)
    }catch (exception){
        response.json(exception)
    }
}

module.exports = {
    updateUserServices,

}