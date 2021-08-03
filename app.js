//mongodb
require('./config/db')
const express = require('express');
const app = express();

const userRouter = require('./api/user');

const bodyParser = require('express').join;
app.use(bodyParser());
app.use('/user',userRouter)

const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log('server is connected')

});