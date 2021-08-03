const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema =  new Schema({
    name:string,
    email:string,
    password:string,
    dateofbirth:Date
})

const user = mongoose.model('user', userSchema);

module.exports = user;