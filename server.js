'use strict';


const express = require('express');
const app = express();
const PORT = 8080;
const chitchat = require("./modules/consolemsg.module.js");


/**
 * Serve all the static content from within the /public folder.
 */
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + 'public/index.html');
});



app.listen(8080, (err) =>{
    if(err) console.log('error starting the server', err);
    else console.log('Hello');
})

chitchat.consolemsg();
