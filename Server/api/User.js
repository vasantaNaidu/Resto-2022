const express = require('express');
const router = express.Router();

const User = require("./../models/User");

const bcrypt = require('bcrypt')

router.post('/signup',(req,res)=>{
    let {name, email, password, dob} = req.body;
    name = name.trim();
    email = email.trim();
    password = password.trim();
    dob = dob.trim();

    if (name == "" || email == "" || password == "" || dob == "") {
        res.json({
            status: "FAILED",
            message: "Empty input fields!"
        });
    }
    else if (!/^[a-zA-Z ]*$/.test(name)){
        res.json({
            status:"FAILED",
            message: "Invalid Name!"
        });
    }
    else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        res.json({
            status: "FAILED",
            message: "Invalid Email!"
        });
    }
    else if(!new Date(dob).getTime()){
        res.json({
            status:"FAILED",
            message:"Invalid DOB!"
        });
    }
    else if(password.length < 8){
        res.json({
            status:"FAILED",
            message:"Password is too short!"
        });
    }
    else{
        User.find({email}).then(result =>{
            if(result.length){
                res.json({
                    status:"FAILED",
                    message:"User with provided email already exists!"
                })
            }
            else {
                const saltRounds = 10;
                bcrypt.hash(password,saltRounds).then(hashedPassword =>{
                    const newUser = new User ({
                        name,
                        email,
                        password : hashedPassword,
                        dob
                    });
                    newUser.save().then(result =>{
                        res.json({
                            status:"SUCCESS",
                            message: "Signp Successful",
                            data:result,
                        });
                    })
                    .catch(err => {
                        res.json({
                            status:"FAILED",
                            message: "An error occured while saving new user account!"
                        })
                    })
                })
                .catch(err => {
                    res.json({
                        status:"FAILED",
                        message: "An error occured while hashing password!"
                    })
                })
            }
        }).catch(err => {
            console.log(err);
            res.json({
                status:"FAILED",
                message:"An Error Occured while checking for the existing user! "
            })
        })
    }
})

router.post('/login',(req,res)=>{
    let {email, password} = req.body;
    email = email.trim();
    password = password.trim();

    if (email == "" || password == "") {
        res.json({
            status: "FAILED",
            message: "Empty credentials supplied!"
        });
    }
    else {
        User.find({email})
        .then(data => {
            if(data.length) {
                const hashedPassword = data[0].password;
                bcrypt.compare(password,hashedPassword).then(result => {
                    if(result) {
                        res.json({
                            status: "SUCCESS",
                            message: "Signin Successfully",
                            data: data
                        })
                    }
                    else {
                        res.json({
                            status: "FAILED",
                            message: "Invalid Password entered!"
                        })
                    }
                })
                .catch(err => {
                    res.json({
                        status: "FAILED",
                        message: "An error occurred while comparing passwords"
                    })
                })
            }
            else {
                res.json({
                    status: "FAILED",
                    message: "Invalid credentionals"
                })
            }
        })
        .catch(err => {
            res.json({
                status: "FAILED",
                message: "An error occured while checking with the existing user"
            })
        })
    }
})

module.exports = router;