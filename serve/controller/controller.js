const express = require('express');
const cors = require('cors')
const {createUser, getUser} = require('../services/service')
const bodyParser = require("body-parser");
const {get} = require("mongoose");
const {response, request} = require("express");

/**
 *
 * user : /user
 * message : /message
 *room : /room:id
 *
 */
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/',(request,reponse)=>{
    reponse.send('hello')
})

app.post('/inscription', async (request, response, next) => {
    console.log('post')
    let json = {
        name: request.body.name,
        email: request.body.email,
        password: request.body.password,
        admin: request.body.admin,
    }
    let valide = await createUser(json)
    response.send(valide);
});

app.get('/inscription', async (request, response) => {
    console.log('Get')
    let json = {
        email: request.query.email,
    }
    if(await getUser(json) === 1){
        response.json({connect:'success'})
    }else{
        response.json({connect:'error'})
    }
});

/**
 * @param: /user ( GET )
 * this path api server using to call methodes
 */
app.get('/user',async (request, response) => {
    console.log('Get user : ')
    console.log(request)
    // let userGetting = await getUser(request)
    // if (userGetting.length < 1) {
    //     response.json({
    //         result : null,
    //         error : 'This user doesn\'t exist'
    //     })
    // }else{
    //     response.json({
    //         result : userGetting[0],
    //         error : -1
    //     })
    // }
});

app.listen(3000, () => {
    console.log("Started on PORT 3000");
})
