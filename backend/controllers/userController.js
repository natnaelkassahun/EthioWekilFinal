const { promises } = require("dns");
const UserModel = require("../models/userModel")
const bcrypt = require("bcrypt");
const jwt  =  require("jsonwebtoken");
const { error } = require("console");
const dotenv = require( 'dotenv');
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET
const otpGenerator = require('otp-generator')

/* POST : http://localhost:5001/api/register */
/* { "username" : "Nati1234"
   "password" : "Nati1234"
   "email" : "example@gmail.com"
   "firstName" : "Natnael"
   "lastName" : "Kassahun"
   "mobile" : "0973153901"
   "address" : "garment"
   "profile" : ""
   }

 */
const verifyUser = async (req, res, next) => {
   try{
    const {username} =  req.method == "GET"? req.query : req.body;
    //check the user existance
    let exist = UserModel.findOne({ username });
    if(!exist) res.status(404).send({error: "Can't find User"})
    next();

   } catch(error){
    return res.status(404).send({error: "Authentication Error"})
   }

}
const register = async (req, res) => {
   try {
    const {username, password,profile,email} = req.body;

    //check the existing user
    const existUsername = new Promise((resolve,reject)=>{
        UserModel.findOne({ username })
                 .then((result)=>{
                          if(result)  {
                       
                            reject({error: "Please use unique username"})
                            }
                          resolve();
                 }).catch((error)=>{
                          reject({error})
                 })
        })

    //check the existing email
    const existEmail = new Promise((resolve,reject)=>{
        UserModel.findOne({ email })
        .then((result)=>{
                 if(result)  {
                    reject({error: "Please use unique email"})}
                 resolve();
        }).catch((error)=>{
                 reject({error})
        })
    });

     

    Promise.all([existUsername,existEmail]).then(()=>{
        if(password){
            bcrypt.hash(password, '$2a$10$CwTycUXWue0Thq9StjUM0u')
            .then(hashedPassword=>{
                 const  user = new UserModel({
                    username,
                    password: hashedPassword,
                    profile: profile || '',
                    email
                 });
                 //return save result as response
                 user.save()
                 .then(result => res.status(201).send({msg: "User register successfuly"}))
                 .catch(error=>{
                    return res.status(500).send({
                        error: "Enable to save "
                    })
                })

            }).catch(error=>{
                return res.status(500).send({
                    error: "Enable to hashed passord"
                })
            })
        }
    }).catch((error)=>{
        return res.status(500).send({error})
    })
 }catch{
    return res.status(500).send("0")
 }
}


/* POST : http://localhost:5001/api/login */
/* { "username" : "Nati1234"
   "password" : "Nati1234"
*/
const login = async (req, res) => {
    const {username, password} = req.body;
   
    try{
       UserModel.findOne({username})
       .then((user)=>{
         bcrypt.compare(password, user.password)
               .then(passwordCheck => {
                 if(!passwordCheck) return res.status(400).send({error: "Don't have password"});
                 //create jwt token
                 const token = jwt.sign({
                               userId: user._id,
                               username: user.username
                               },JWT_SECRET,{expiresIn: "24h"});
                 return res.status(200).send({
                    msg: "Login seccessful...",
                    username: user.username,
                    token                    
                });
                })
                
               .catch(error => {
                   return res.status(400).send({error: "Password does not match"})
               })
        }).catch((error)=>{
            return res.status(404).send({error: "Username not found"})
        })
    }catch{
         return res.status(500).send("0")
    }
 }

/* GET : http://localhost:5001/api/user/example12 */
const getUser = async (req, res) => {
    const {username} = req.params;
    try{
        if(!username) return res.status(501).send({error: "Invalid Username"})
        UserModel.findOne({username})
        .then((user)=>{
            if(!user) return res.status(501).send({error: "Coudn't find user"})
            const {password, ...rest} = Object.assign({},user.toJSON());

            return res.status(201).send(rest)
        }).catch((error)=>{
            return res.status(500).send({error})
        })
    
    } catch(error){
        return res.status(404).send({error: "Authentication Error"})
    }
 }

/* PUT : http://localhost:5001/api/updateUser */
const updateUser = async (req, res) => {
    try {
        //const id = req.query.id;
        const {userId} = req.user;
        if(userId){
            const body = req.body;
            UserModel.updateOne({_id: userId},body)
            .then((user)=>{
                return res.status(201).send({msg: "Record updated...!"})
            }).catch((error)=>{
                throw error;
            })
        }else{
            return res.status(404).send({error: "User Not Found... !"});
        }
    } catch (error) {
        return res.status(404).send({error});
    }
 }

 /* GET : http://localhost:5001/api/generateOTP */
const generateOTP = async (req, res) => {
    req.app.locals = await otpGenerator.generate(6,{lowerCaseAlphabets: false,UpperCaseAlphabets: false,specialChars: false})
    res.status(201).send({code: req.app.locals.OTP});
}

 /* GET : http://localhost:5001/api/verifyOTP */
const verifyOTP = async (req, res) => {
    const {code} = req.query;
    if(parseInt(req.app.locals.OTP) === parseInt(code)){
        req.app.locals.OTP = null
        req.app.locals.resetSession = true
        return res.status(404).send({msg: "Verify Successfully"});
    }
 }

  //successfully red]irect user when OTP is valid
  /* GET : http://localhost:5001/api/createReseSession */
const createReseSession = async (req, res) => {
    res.json('createReseSession route')
 }

  //update the password when we have a valid session
  /* GET : http://localhost:5001/api/resetPassword */
const resetPassword = async (req, res) => {
    res.json('resetPassword route')
 }

module.exports = {
    register,
    login,
    getUser,
    updateUser,
    generateOTP,
    verifyOTP,
    createReseSession,
    resetPassword,
    verifyUser

}
