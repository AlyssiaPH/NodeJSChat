const express = require('express');
const cors = require('cors')
const {getUserController, getMessageController, getRoomController} = require("./methodes/getterController");
const {createUserController, createMessageController, createRoomController} = require("./methodes/createController");
const {deleteUserController, deleteRoomController, deleteMessageController} = require("./methodes/deleteController");
const {updateRoomController,updateMessageController,updateUserController} = require("./methodes/UpdateController");
const {request, response} = require("express");
const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json())

/**
 * ALL POST
 */
app.post(
    '/user',
    async (req, res) => {
        await createUserController(req, res)
    })
app.post(
    '/message',
    async (req, res) => {
        await createMessageController(req, res)
    })
app.post(
    '/room',
    async (req, res) => {
        await createRoomController(req, res)
    })

/**
 * ALL GET
 */
app.get(
    '/user',
    async (req, res) => {
        await getUserController(req, res)
    })
app.get(
    '/message',
    async (req, res) => {
        await getMessageController(req, res)
    })
app.get(
    '/room',
    async (req, res) => {
        await getRoomController(req, res)
    })
/**
 * ALL DELETE
 */
app.delete(
    '/message',
    async (req, res) => {
        await deleteMessageController(req,res)
    })
app.delete(
    '/room',
    async (req, res) => {
        await deleteRoomController()(req,res)
    })
app.delete(
    '/user',
    async (req, res) => {
        await deleteUserController(req,res)
    })



app.listen(3000, () => {
    console.log("Started on PORT 3000");
})


//
// /**
//  * @param: /user ( GET )
//  * this path api server using to call methodes
//  * Receive => user = {
//  *     email : test@test.com ( String )
//  *     name : toto ( String )
//  *     password: test ( String )
//  *     admin : false ( Boolean )
//  *     rooms : ['test'] ( Array )
//  * }
//  */
// app.get('/user', getUserController);
//
// /**
//  * @param: /room ( GET )
//  * this path api server using to call methodes
//  * Receive => room = {
//  *     name : toto ( String )
//  *     users : ['test'] ( Array )
//  *     messages : ['test'] ( Array )
//  * }
//  */
// app.get('/room', async (request, response) => {
//     console.log('Get message : ')
//     console.log(request)
//     try {
//         let userGetting = await getRoom(request)
//         if (userGetting.length < 1) {
//             response.json({
//                 result : null,
//                 error : 'This user doesn\'t exist'
//             })
//         }else{
//             response.json({
//                 result : userGetting[0],
//                 error : -1
//             })
//         }
//     }catch (exception){
//         response.json({
//             result : null,
//             error : 'This user doesn\'t exist'
//         })
//     }
// });
//
// /**
//  * @param: /messages ( GET )
//  * this path api server using to call methodes
//  * Receive => messages = {
//  *     content : toto ( String )
//  *     user : toto ( String )
//  *     room : toto ( String )
//  * }
//  */
// app.get('/messages', async (request, response) => {
//     console.log('Get message : ')
//     console.log(request)
//     try {
//         let userGetting = await getMessages(request)
//         if (userGetting.length < 1) {
//             response.json({
//                 result : null,
//                 error : 'This user doesn\'t exist'
//             })
//         }else{
//             response.json({
//                 result : userGetting[0],
//                 error : -1
//             })
//         }
//     }catch (exception){
//         response.json({
//             result : null,
//             error : 'This user doesn\'t exist'
//         })
//     }
// });
//
// /**
//  * ##################### POST ##############################
//  */
//
// /**
//  * @param: /user ( POST )
//  * @function : CreateUser
//  * this path api server using to call methodes createUsers
//  * Receive => user = {
//  *     email : test@test.com ( String )
//  *     name : toto ( String )
//  *     password: test ( String )
//  *     admin : false ( Boolean )
//  *     rooms : ['test'] ( Array )
//  * }
//  */
// // app.post('/user', async (request, response) => {
// //     try{
// //         console.log('Post created User')
// //         let json = {
// //             name: request.body.name,
// //             email: request.body.email,
// //             password: request.body.password,
// //             admin: request.body.admin,
// //             rooms : request.body.rooms
// //         }
// //         console.log(json)
// //         let valide = await createUser(json)
// //         response.json(valide);
// //     }catch (exception){
// //         response.json(exception);
// //     }
//
// })
//
// /**
//  * @param: /room ( POST )
//  * @function : CreateRoom
//  * this path api server using to call methodes createRoom
//  * Receive => room = {
//  *     name : test@test.com ( String )
//  *     users : ['test'] ( Array )
//  *     messages : ['test'] ( Array )
//  * }
//  */
// app.post('/room', async (request, response) => {
//     try{
//         let json = {
//             name: request.body.name,
//             users: request.body.users,
//             messages:request.body.messages
//         }
//         console.log(json)
//         let valide = await createRoom(json)
//         response.json(valide);
//         console.log('Post created Room')
//     }catch (exception){
//         response.json(exception);
//         console.log('Post created Room failled ')
//     }
// })
//
// /**
//  * @param: /messages ( POST )
//  * @function : CreateMessages
//  * this path api server using to call methodes createMessages
//  * Receive => messages = {
//  *     user : ['test'] ( Array )
//  *     content : test@test.com ( String )
//  *     room : ['test'] ( Array )
//  * }
//  */
// app.post('/messages', async (request, response) => {
//     try{
//         console.log('Post created Messages')
//         let json = {
//             iduser: request.body.iduser,
//             idroom: request.body.idroom,
//             content:request.body.content
//         }
//         console.log(json)
//         let valide = await createMessage(json)
//         response.json(valide);
//     }catch (exception){
//         response.json(exception);
//     }
//
// })
//
// /**
//  * ##################### DELETE ##############################
//  */
//
// /**
//  * @param: /messages ( DELETE )
//  * @function : deleteMessages
//  * this path api server using to call methodes deleteMessages
//  */
// app.delete('/deleteMessage', async (request, response)=>{
//     try{
//         console.log('Delete message : ')
//         console.log(request)
//         let json = {
//             user: request.body.user,
//             room: request.body.room,
//             content:request.body.content
//         }
//         console.log(json)
//         let valide = await deleteMessage(json)
//         response.json(valide)
//     }catch (exception){
//         response.json(exception)
//     }
// })
//
// app.delete('/deleteUser', async (request, response)=>{
//     try{
//         console.log('Delete User : ')
//         console.log(request)
//         let json = {
//             user: request.body.user,
//             room: request.body.room,
//             content:request.body.content
//         }
//         console.log(json)
//         let valide = await deleteMessage(json)
//         response.json(valide)
//     }catch (exception){
//         response.json(exception)
//     }
// })
//
