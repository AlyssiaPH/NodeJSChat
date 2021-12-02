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

app.get('/', (request, reponse) => {
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

/** */
app.get('/inscription', async (request, response) => {
    console.log('Get')
    let json = {
        email: request.query.user.id,
    }
    if (await getUser(json) === 1) {
        response.json({connect: 'success'})
    } else {
        response.json({connect: 'error'})
    }
});

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
 * @param: /user ( POST )
 * @function : Create USERS
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
    response.send(valide);
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
