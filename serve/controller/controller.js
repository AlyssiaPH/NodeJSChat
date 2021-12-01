const express = require('express');
const cors = require('cors')
const {createUser}= require('../services/service')


const app = express();

app.use(cors());

// app.post('/login',(request, response,) =>{
//     let json = {test:request.config}
//     console.log(request);      // your JSON
//     response.send(request.config);
// });

app.post('/inscription',async (request, response,) =>{
    let value = request.config
    let json = {toto:value}
    console.log(request);
    response.json(json)
    // response.send(request);
});

// app.get('/',
//     (request, response) => {
//         let json = {test:'hello'}
//         console.log(request.body);      // your JSON
//         response.send(json);
//     });

app.listen(3000);