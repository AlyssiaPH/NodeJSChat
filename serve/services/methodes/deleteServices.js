const {mode} = require("vue-socket.io/webpack.config");

async function deleteUserService(id, modelUsers,req,res) {
    try{
        let test = await modelUsers.findOneAndDelete({ _id: id });
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
    deleteUserService
}
