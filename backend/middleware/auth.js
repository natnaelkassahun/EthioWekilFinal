const jwt = require('jsonwebtoken');
const dotenv = require( 'dotenv');
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET

const Auth = async (req,res,next)=>{
    try {
        const token = req.headers.authorization.split(" ")[1];
        //retrive the user detail
        const decodedToken = await jwt.verify(token,JWT_SECRET);
        req.user = decodedToken;
        next()
    } catch (error) {
        res.status(201).json({error: "Authentiocation Faild!"})
    }
}

const LocalVariable = async (req,res,next)=>{
    req.app.locals = {
        OTP: null,
        resetSession: false
    }
    next()
}

module.exports = {
    Auth,
    LocalVariable
}
