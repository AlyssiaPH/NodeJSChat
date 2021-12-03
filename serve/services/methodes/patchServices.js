const {encrypt} = require("./../../javascript/hash");


async function patchUserService(json, modelUsers,req,res) {
    try{
        const data = new modelUsers({
            name: json.name,
            email: json.email,
            password: encrypt(json.password),
            admin: json.admin,
            rooms : json.rooms
        })
        let test = await modelUsers.findOneAndUpdate(data, json );
        // console.log(modelUsers.findOne({_id:id}).)
        // modelUsers.findOneAndDelete({_id:id});
        // modelUsers.splice(projectIndex, 1);
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