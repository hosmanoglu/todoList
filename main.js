const express = require('express')
const app = express()
const path = require('path');
require('dotenv').config()
const fs = require('fs');

app.use('/src', express.static(path.join(__dirname, 'routes')))


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
})


fs.appendFileSync('./routes/index.js', 'apiUrl = "'+process.env.api+'";');
console.log(process.env.api)//set api url de tetik
console.log(process.env)  
const port = 8080

app.listen(port)
console.log("run "+port)
module.exports = app;