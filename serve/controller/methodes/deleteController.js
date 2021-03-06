const {servicesDelete} = require("../../services/service");

async function deleteUserController(request,response){
    try {
        let valide = await servicesDelete('/user',request.body.id,request,response)
    } catch (exception) {
        response.json({
            result: null,
            error: 'This user doesn\'t exist'
        })
    }
}

async function deleteMessageController(request,response){
    try {
        let valide = await servicesDelete('/message',request.query.id,request,response)
    } catch (exception) {
        response.json({
            result: null,
            error: 'This message doesn\'t exist'
        })
    }
}

module.exports = {
    deleteUserController,
    deleteMessageController

}



