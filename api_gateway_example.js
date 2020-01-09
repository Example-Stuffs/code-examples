const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const axios = require('axios');

app.use(express.static(path.join(__dirname, 'build')));

// parser object which will be passed to route
var jsonParser = bodyParser.json();

// required so CORS doesn't block the request
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// node route
app.post('/login', jsonParser, function (req, res, next) {
    
    // how to access the JSON sent by the user.
    console.log(`RECEIVED:\n${JSON.stringify(req.body, null, 2)}\n-------------------`);

    axios({
        method: 'post',
        url: 'http://localhost:8080/api/login',
        data: req.body
    })
    .then((response) => {
        // forward the response from the api to the user
        res.send(response.data);
    })
    .catch((error) => {
        // handle error
    })
    .finally(() => {
        // clean up
    });

})

app.listen(process.env.PORT || 8000);