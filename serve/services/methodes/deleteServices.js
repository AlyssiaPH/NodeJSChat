
async function deleteUserService(json, modelUsers,req,res) {
    try{
        const id = json.id;
        const projectIndex = modelUsers.findIndex(p => p.id === id);
        modelUsers.splice(projectIndex, 1);
        return res.send();
    }catch (exception){
        console.log('error : '+exception)
        res.json(exception)
    }
}

module.exports = {
    deleteUserService
}
