const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors=require('cors');
// This will be our application entry. We'll setup our server here.
const http = require('http');
// Set up the express app
const app = express();
// Log requests to the console.
app.use(logger('dev'));
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
// Setup a default catch-all route that sends back a welcome message in JSON format.
var models=require('./models');
models.sequelize.sync().then(function(){
    console.log('database connected...');
}).catch(function(err){
    console.log(err, 'not connected...');
});
const route=require('./router/router.js');
app.use('/', route);
const port = parseInt(process.env.PORT, 10) || 8000;
console.log('port has been set to', port);
app.listen(port,()=>{
    console.log('connected to port no', port);
});
module.exports = app;
