const {servicesPatch} = require('./../../services/service')
const {encrypt} =require('../../javascript/hash')

async function patchUserController(request,response){
    try{
        console.log('Patch User wait')
        let json = {
            name: request.body.name,
            email: request.body.email,
            password: request.body.password,
            admin: request.body.admin,
            rooms : request.body.rooms
        }
        console.log(json)
        let valide = await servicesPatch('/user',json,request,response)
        response.json(valide);
        console.log('User !')
    }catch (exception){
        console.log('error : '+exception)
        response.json({exception});
    }
}

module.exports = {
   patchUserController,

}