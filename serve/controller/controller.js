const express = require('express');
const cors = require('cors')
const {
    createUser,
    createMessage,
    createRoom,
    getRoom,
    getMessages,
    getUser,
} = require('../services/service')
const bodyParser = require("body-parser");
const {get} = require("mongoose");
const {response, request} = require("express");

/**
 *
 * user : /user
 * message : /message
 * room : /room:id
 *
 *
 * user = {
 *     email : test@test.com ( String )
 *     name : toto ( String )
 *     password: test ( String )
 *     admin : false ( Boolean )
 *     rooms : ['test'] ( Array )
 * }
 *
 * room = {
 *     users : ['idtoto'] ( Array )
 *     allMessages : [message15] ( Array )
 * }
 *
 * message = {
 *     idroom : ['idroom'] ( Array )
 *     iduser : 'idtoto' ( String )
 *     content : 'hello les gens ' ( String )
 * }
 *
 */
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json())

/**
 * @param: /user ( GET )
 * this path api server using to call methodes
 * Receive => user = {
 *     email : test@test.com ( String )
 *     name : toto ( String )
 *     password: test ( String )
 *     admin : false ( Boolean )
 *     rooms : ['test'] ( Array )
 * }
 */
app.get('/user', async (request, response) => {
    console.log('Get user : ')
    console.log(request)
    try {
        let userGetting = await getUser(request)
        if (userGetting.length < 1) {
            response.json({
                result : null,
                error : 'This user doesn\'t exist'
            })
        }else{
            response.json({
                result : userGetting[0],
                error : -1
            })
        }
    }catch (exception){
        response.json({
            result : null,
            error : 'This user doesn\'t exist'
        })
    }
});

/**
 * @param: /room ( GET )
 * this path api server using to call methodes
 * Receive => room = {
 *     name : toto ( String )
 *     users : ['test'] ( Array )
 *     messages : ['test'] ( Array )
 * }
 */
app.get('/room', async (request, response) => {
    console.log('Get message : ')
    console.log(request)
    try {
        let userGetting = await getRoom(request)
        if (userGetting.length < 1) {
            response.json({
                result : null,
                error : 'This user doesn\'t exist'
            })
        }else{
            response.json({
                result : userGetting[0],
                error : -1
            })
        }
    }catch (exception){
        response.json({
            result : null,
            error : 'This user doesn\'t exist'
        })
    }
});

/**
 * @param: /messages ( GET )
 * this path api server using to call methodes
 * Receive => messages = {
 *     content : toto ( String )
 *     user : toto ( String )
 *     room : toto ( String )
 * }
 */
app.get('/messages', async (request, response) => {
    console.log('Get message : ')
    console.log(request)
    try {
        let userGetting = await getMessages(request)
        if (userGetting.length < 1) {
            response.json({
                result : null,
                error : 'This user doesn\'t exist'
            })
        }else{
            response.json({
                result : userGetting[0],
                error : -1
            })
        }
    }catch (exception){
        response.json({
            result : null,
            error : 'This user doesn\'t exist'
        })
    }
});

/**
 * ##################### POST ##############################
 */

/**
 * @param: /user ( POST )
 * @function : CreateUser
 * this path api server using to call methodes createUsers
 * Receive => user = {
 *     email : test@test.com ( String )
 *     name : toto ( String )
 *     password: test ( String )
 *     admin : false ( Boolean )
 *     rooms : ['test'] ( Array )
 * }
 */
app.post('/user', async (request, response) => {
    try{
        console.log('Post created User')
        let json = {
            name: request.body.name,
            email: request.body.email,
            password: request.body.password,
            admin: request.body.admin,
            rooms : request.body.rooms
        }
        console.log(json)
        let valide = await createUser(json)
        response.json(valide);
    }catch (exception){
        response.json(exception);
    }

})

/**
 * @param: /room ( POST )
 * @function : CreateRoom
 * this path api server using to call methodes createRoom
 * Receive => room = {
 *     name : test@test.com ( String )
 *     users : ['test'] ( Array )
 *     messages : ['test'] ( Array )
 * }
 */
app.post('/room', async (request, response) => {
    try{
        let json = {
            name: request.body.name,
            users: request.body.users,
            messages:request.body.messages
        }
        console.log(json)
        let valide = await createRoom(json)
        response.json(valide);
        console.log('Post created Room')
    }catch (exception){
        response.json(exception);
        console.log('Post created Room failled ')
    }
})

/**
 * @param: /messages ( POST )
 * @function : CreateMessages
 * this path api server using to call methodes createMessages
 * Receive => messages = {
 *     user : ['test'] ( Array )
 *     content : test@test.com ( String )
 *     room : ['test'] ( Array )
 * }
 */
app.post('/messages', async (request, response) => {
    try{
        console.log('Post created Messages')
        let json = {
            iduser: request.body.iduser,
            idroom: request.body.idroom,
            content:request.body.content
        }
        console.log(json)
        let valide = await createMessage(json)
        response.json(valide);
    }catch (exception){
        response.json(exception);
    }

})

/**
 * ##################### DELETE ##############################
 */

/**
 * @param: /messages ( DELETE )
 * @function : deleteMessages
 * this path api server using to call methodes deleteMessages
 */
app.delete('/deleteMessage', async (request, response)=>{
    try{
        console.log('Delete message : ')
        console.log(request)
        let json = {
            user: request.body.user,
            room: request.body.room,
            content:request.body.content
        }
        console.log(json)
        let valide = await deleteMessage(json)
        response.json(valide)
    }catch (exception){
        response.json(exception)
    }
})

app.delete('/deleteUser', async (request, response)=>{
    try{
        console.log('Delete User : ')
        console.log(request)
        let json = {
            user: request.body.user,
            room: request.body.room,
            content:request.body.content
        }
        console.log(json)
        let valide = await deleteMessage(json)
        response.json(valide)
    }catch (exception){
        response.json(exception)
    }
})

app.listen(3000, () => {
    console.log("Started on PORT 3000");
})

/**
 *
 * deleteuser
 * updateuser
 *
 * getmessage
 * deletemessage
 * updatemessage
 *
 * getroom
 * deleteroom
 *
 *
 */
