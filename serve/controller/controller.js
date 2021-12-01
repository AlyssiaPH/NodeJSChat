const express = require('express');
const cors = require('cors')
const {createUser, getUser} = require('../services/service')
const bodyParser = require("body-parser");
const {get} = require("mongoose");


const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json())

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

app.listen(3000, () => {
    console.log("Started on PORT 3000");
})