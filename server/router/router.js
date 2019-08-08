const express= require('express');
const route=express.Router();
const controller=require('../controller/controller.js');

route.post('/store', controller.store);
route.get('/get_details/:leadID', controller.find_data);
module.exports=route;