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

module.exports = {
    deleteUserController
}
