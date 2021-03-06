const mongoose = require('mongoose')
const {createUserService, createMessageService, createRoomService} = require('./methodes/createServices')
const {getterMessageService,getterUserService,getterRoomService, getterAllRoomService, getterAllRoomMessagesService, checkLoginUser} = require('./methodes/getterServices')
const {deleteUserService,deleteMessageService}=require('./methodes/deleteServices')
const {patchUserService} = require("./methodes/patchServices");
mongoose.connect('mongodb://groupe6:ekwHcv6ZmRVRNBrSX5w@94.130.108.19/groupe6');

let modelUsers = mongoose.model('user', {name: String, email: String, password: String, admin: Boolean, rooms: Array})
let modelMessage = mongoose.model('message', {idroom: String, iduser: String, content: String,})
let modelRoom = mongoose.model('room', {name: String, users: Array, messages: Array,})

async function servicesCreation(path,data,req,res){
    switch (path){
        case '/user':
            return createUserService(data,modelUsers,req,res)
        case '/message':
            return createMessageService(data,modelMessage,req,res)
        case '/room':
            return createRoomService(data,modelRoom,req,res)
        case '/login':
            return checkLoginUser(data,modelUsers,req,res)
        default:
            break
    }
}

async function servicesGetter(path,data,req,res){
    switch (path){
        case '/user':
            return getterUserService(data,modelUsers,req,res)
        case '/message':
            return getterMessageService(data,modelUsers,req,res)
        case '/room':
            return getterRoomService(data,modelRoom,req,res)
        case '/allrooms':
            return getterAllRoomService(data,modelRoom,req,res)
        case '/allroommessages':
            return getterAllRoomMessagesService(data,modelMessage,req,res)
        default:
            break
    }
}

async function servicesDelete(path,data,req,res){
    switch (path){
        case '/user':
            return deleteUserService(data,modelUsers,req,res)
        case '/message':
            return deleteMessageService(data,modelMessage,req,res)
        default:
            break
    }
}

async function servicesPatch(path,data,req,res){
    switch (path){
        case '/user':
            return patchUserService(req.body.id,data,modelUsers,req,res)
        case '/message':
        default:
            break
    }
}


module.exports = {
    servicesGetter,
    servicesCreation,
    servicesDelete,
    servicesPatch
}
