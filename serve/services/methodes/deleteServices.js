const {mode} = require("vue-socket.io/webpack.config");

async function deleteUserService(id, modelUsers,req,res) {
    try{
        let test = await modelUsers.findOneAndDelete({ _id: id });
        console.log(test)
        res.json(test)
    }catch (exception){
        console.log('error : '+exception)
        res.json(exception)
    }
}

async function deleteMessageService(id, modelMessage,req,res) {
    try{
        let test = await modelMessage.findOneAndDelete({ _id: id });
        console.log(test)
        res.json(test)
    }catch (exception){
        console.log('error : '+exception)
        res.json(exception)
    }
}



module.exports = {
    deleteUserService,
    deleteMessageService
}
