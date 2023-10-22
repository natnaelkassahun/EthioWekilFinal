const express = require("express")
const router = express.Router()
const cors = require("cors")
const uploadPhoto = require("../middleware/upload.js")
const {Auth,LocalVariable} = require("../middleware/auth.js")
const {register,
    login,
    getUser,
    updateUser,
    generateOTP,
    verifyOTP,
    createReseSession,
    resetPassword,
    verifyUser} = require("../controllers/userController.js")

//router.get('/', cors(), getItem)


router.post('/register', cors(), (register))
//router.post('/registerMail', (registerMail))
router.post('/authenticate', (req,res)=>{ res.end()})
router.post('/login',verifyUser,login)

router.get('/user/:username', getUser)
router.get('/generateOTP',verifyUser, LocalVariable, generateOTP)
router.get('/verifyOTP', verifyOTP)
router.get('/createReseSession', createReseSession)

router.put('/updateuser',Auth, updateUser)
router.put('/resetPassword', resetPassword)


module.exports = router