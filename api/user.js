const express = require('express');
const router = express.Router();

// mongodb user model
const user = require('./../models/user');

// password handler
const bcrypt = require('bcrypt');

// signup pass

router.post('/signup',(req,res)=>{
    let{name,email,password,dateofBirth} = req.body;
    name = name.trim()
    email = email.trim()
    password = password.trim()
    dateofbirth = dateofbirth.trim()

    if (name == "" ||  email=="" || password=="" || dateofbirth=="" ){
        res.json({
            status:'error',
            message:'Empty input fields!'
        });
    } else if (!/^[a-zA-z ]*$/.test(name)){
        res.json({
            status:'error',
            message:'invalid name entered'
        })
    } else if (!/^[\w-\.]+\.@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
        res.json({
            status:'error',
            message:'invalid email entered'
        }) 
    }else if (!new Date(dateofbirth).getTime()){
            res.json({
                status:'error',
                message:'invalid dateofbirth entered'
            }) 
    } else if (password.length<8){
                res.json({
                    status:'error',
                    message:'password is to short'
                })
    } else {
                user find({email}).then(result => {
                    if (result.length){
                        res.json({
                            status:'error',
                            message:'email already exsist'
                        })
                    
    } else {
                        //try to create new passwordKey


                        // password handler
                        const saltRound = 10;
                        bycrpt.hash(password,saltRounds).then(hashedpassword => {
                            const newuser = new user({
                                name,
                                email,
                                password:hashedpassword,
                                dateofBirth
                            });

                            new user.save().then(result =>{
                                res.json({
                                    status:'SUCCESS',
                                    message:'signup success'
                                    data: 'result',
                                });
                            })
                            .catch(err =>{
                                res.json({
                                    status:'error',
                                    message:'An error has occured while saving user account'
                                })
                            })
                        })

                    }

                }).catch((err)=>{
                    console.log(err)
                    res.json({
                        status:'error',
                        message:'An error is occured while checking for exsisting user!'
                    })
                })

            }

        

    


    




//signin

router.post('/signin',(req,res)=>{
    let{email,password} = req.body;
    email = email.trim()
    password = password.trim()

    if(email == "" || password == ""){
        res.json({
            status:'error',
            message:'empty credentials '
        })
    } else {
        //check if user exsist
        user.find({email})
        .then(data){
            if (data =>{
                //user exsisting
                const hashedpassword = data[0].password;
                bcrypt.compare(password,hashedpassword).then(result =>{
                    if (result){
                        res.json({
                            status:'success',
                            message:'sign in success',
                            data:data
                        })
                    } else {
                        res.json({
                            status:'success',
                            message:'sign in success',
                            data:data
                        })

                    }
                })
                .catch((err)=>{
                    console.log(err)
                    res.json({
                        status:'error',
                        message:'An error is occured while checking for exsisting user!'
                    })
                } else {


                    res.json({
                    status:'error',
                    message:'An error is occured while checking for exsisting user!'
                })

                }
            })
            .catch((err)=>{
                console.log(err)
                res.json({
                    status:'error',
                    message:'An error is occured while checking for exsisting user!'
                })
        }
    


module.exports = router;
