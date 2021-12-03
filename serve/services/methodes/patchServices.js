const {encrypt} = require("./../../javascript/hash");


async function patchUserService(id,json, modelUsers,req,res) {
    try{
        let test = await modelUsers.updateOne({_id:id},json);
        console.log(test)
        res.json(test)
    }catch (exception){
        console.log('error : '+exception)
        res.json(exception)
    }
}

module.exports = {
    patchUserService

}