const express = require('express');
const cors = require('cors')
const {getUserController, getMessageController, getRoomController, getAllRoomController, getAllRoomMessagesController, login} = require("./methodes/getterController");
const {createUserController, createMessageController,createRoomController} = require("./methodes/createController");
const {deleteUserController, deleteMessageController}=require('./methodes/deleteController')
const {request, response} = require("express");
const {patchUserController} = require("./methodes/patchController");
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
app.post(
    '/login',
    async (req, res) => {
        await login(req, res)
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
app.get(
    '/allrooms',
    async (req, res) => {
        await getAllRoomController(req, res)
    })
app.get(
    '/allusers',
    async (req, res) => {
        await getAllUsersController(req, res)
    })
app.get(
    '/allroommessages',
    async (req, res) => {
        await getAllRoomMessagesController(req, res)
    })
/**
 * ALL DELETE
 */

app.delete('/user',async (req,res)=>{
    await deleteUserController(req,res)
})

app.delete('/message',async (req, res) => {
    await deleteMessageController(req, res)
})

/**
 *ALL PATCH
 */

app.patch('/user',async (req,res)=>{
    await patchUserController(req,res)
})

app.listen(3000, () => {console.log("Started on PORT 3000");})

